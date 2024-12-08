import React, { useEffect, useState } from "react";
import * as quizClient from "./client.ts";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface Question {
  id: number;
  type: string;
  points: number;
  text: string;
  title: string;
  choices?: string[];
  correctAnswer?: number | boolean | string[];
}

interface Attempt {
  questionId: number;
  userAnswer: any;
  isCorrect: boolean;
  correctAnswer?: any;
}

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const { pathname } = useLocation();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const uid = currentUser._id;
  const isFaculty = currentUser.role == "FACULTY";

  const [questions, setQuestions] = useState<Question[]>([]);
  const [attemptInfo, setAttemptInfo] = useState({
    attemptDate: new Date().toString(),
    totalScore: -1,
    numberOfAttempts: -1,
  });
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastAttemptAnswers, setLastAttemptAnswers] = useState();
  const [hasExhaustedAttempts, setAttemptStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuizQuestions();
  }, [cid, qid]);

  const fetchQuizQuestions = async () => {
    try {
      const attemptInfo = await quizClient.findQuizAttemptDataforUser(qid, uid);
      const quiz = await quizClient.fetchQuizesInCourseByID(cid, qid);

      setAttemptInfo(attemptInfo);

      if (attemptInfo.numberOfAttempts >= quiz.numberOfAttempts) {
        setAttemptStatus(true);
        alert(
          "No attempts left!" + "\nallowed attempts :" + quiz.numberOfAttempts + "\nDisplaying Your Last Attempt.."
        );
        fetchLastAttempt();
      }

      setQuestions(quiz.questionData);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
  };

  const handleInputChange = (questionId: number, value: any, index: number | null = null) => {
    setUserAnswers((prevAnswers) => {
      let currentAnswer = prevAnswers[questionId];

      if (index !== null) {
        // Fill in the Blank
        if (!Array.isArray(currentAnswer)) {
          currentAnswer = [];
        }
        currentAnswer[index] = value;
      } else {
        // Multiple Choice / True-False
        currentAnswer = value;
      }

      return {
        ...prevAnswers,
        [questionId]: currentAnswer,
      };
    });
  };

  const handleSubmit = async () => {
    setError(null);
    let totalScore = 0;
    let allAnswered = true;

    const answersData: {
      questionId: number;
      userAnswer: any;
      isCorrect: boolean;
    }[] = [];

    const currentTime = new Date();

    for (const question of questions) {
      const userAnswer = userAnswers[question.id];

      // Check if answered
      if (userAnswer === undefined || (Array.isArray(userAnswer) && userAnswer.some((ans) => ans.trim() === ""))) {
        allAnswered = false;
        break;
      }

      let isCorrect = false;
      if (question.type === "Multiple Choice" || question.type === "True/False") {
        isCorrect = userAnswer === question.correctAnswer;
        if (isCorrect) {
          totalScore += question.points;
        }
      } else if (question.type === "Fill in the Blank") {
        const correctAnswers = question.correctAnswer as string[];
        const userBlanks = userAnswer as string[];

        const correctCount = correctAnswers.reduce((count, correctAnswer, index) => {
          return count + (userBlanks[index]?.trim().toLowerCase() === correctAnswer.trim().toLowerCase() ? 1 : 0);
        }, 0);

        const partialScore = (correctCount / correctAnswers.length) * question.points;
        totalScore += partialScore;
        isCorrect = correctCount === correctAnswers.length;
      }

      answersData.push({
        questionId: question.id,
        userAnswer,
        isCorrect,
      });
    }

    if (!allAnswered) {
      setError("Please answer all questions before submitting.");
      return;
    }

    const attemptResult = {
      quizId: qid,
      userId: currentUser._id,
      totalScore: totalScore.toFixed(2),
      maxScore: questions.reduce((sum, q) => sum + q.points, 0),
      answers: answersData,
      attemptDate: currentTime.toISOString(),
    };

    await quizClient.addQuizAttempt(attemptResult);
    setScore(totalScore);
  };

  const fetchLastAttempt = async () => {
    try {
      const lastAttemptData = await quizClient.findQuizAttemptDataforUser(qid, uid);
      setLastAttemptAnswers(lastAttemptData.answers);

      const prefilledAnswers = lastAttemptData.answers.reduce((acc: any, attempt: Attempt) => {
        acc[attempt.questionId] = attempt.userAnswer;
        return acc;
      }, {});

      setUserAnswers(prefilledAnswers);
      setScore(lastAttemptData.totalScore);
    } catch (error) {
      console.error("Error fetching last attempt:", error);
    }
  };

  const handleViewLastAttempt = () => {
    fetchLastAttempt();
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{pathname.includes("preview") ? "Quiz Preview" : "Quiz"}</h1>
      <hr />
      {questions.length > 0 ? (
        <ul className="list-group">
          {questions.map((question) => {
            const userAnswer = userAnswers[question.id];
            const isCorrect =
              question.type === "Multiple Choice" || question.type === "True/False"
                ? userAnswer === question.correctAnswer
                : question.type === "Fill in the Blank"
                ? (question.correctAnswer as string[]).every(
                    (correctAnswer, index) =>
                      userAnswer?.[index]?.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
                  )
                : false;

            const answerClass =
              score !== null ? (isCorrect ? "list-group-item-success" : "list-group-item-danger") : "";

            return (
              <li key={question.id} className={`list-group-item mb-3 ${answerClass}`}>
                <h5>{question.title}</h5>
                <p dangerouslySetInnerHTML={{ __html: question.text }}></p>
                <p>
                  <strong>Points:</strong> {question.points}
                </p>

                {question.type === "Multiple Choice" && (
                  <div>
                    <p>
                      <strong>Choose one:</strong>
                    </p>
                    {question.choices?.map((choice, index) => (
                      <div key={index} className="form-check">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          className="form-check-input me-2"
                          id={`choice-${question.id}-${index}`}
                          onChange={() => handleInputChange(question.id, index)}
                          disabled={score !== null}
                          checked={userAnswers[question.id] === index} // Added checked attribute
                        />
                        <label className="form-check-label" htmlFor={`choice-${question.id}-${index}`}>
                          {choice}
                        </label>
                      </div>
                    ))}
                  </div>
                )}

                {question.type === "True/False" && (
                  <div>
                    <p>
                      <strong>True or False:</strong>
                    </p>
                    <div className="form-check">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        className="form-check-input"
                        id={`true-${question.id}`}
                        onChange={() => handleInputChange(question.id, true)}
                        disabled={score !== null}
                        checked={userAnswers[question.id] === true} // Added checked attribute
                      />
                      <label className="form-check-label" htmlFor={`true-${question.id}`}>
                        True
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        className="form-check-input"
                        id={`false-${question.id}`}
                        onChange={() => handleInputChange(question.id, false)}
                        disabled={score !== null}
                        checked={userAnswers[question.id] === false} // Added checked attribute
                      />
                      <label className="form-check-label" htmlFor={`false-${question.id}`}>
                        False
                      </label>
                    </div>
                  </div>
                )}

                {question.type === "Fill in the Blank" && (
                  <div>
                    <p>
                      <strong>Fill in the blanks:</strong>
                    </p>
                    {(question.correctAnswer as string[]).map((_, index) => (
                      <div key={index} className="mb-2">
                        <label htmlFor={`blank-${question.id}-${index}`} className="form-label">
                          Blank {index + 1}:
                        </label>
                        <input
                          type="text"
                          id={`blank-${question.id}-${index}`}
                          className="form-control"
                          placeholder={`Enter answer for blank ${index + 1}`}
                          value={userAnswers[question.id]?.[index] || ""}
                          onChange={(e) => handleInputChange(question.id, e.target.value, index)}
                          disabled={score !== null}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {score !== null && (
                  <div>
                    {hasExhaustedAttempts && (
                      <p>
                        <strong>Correct Answer:</strong>{" "}
                        {Array.isArray(question.correctAnswer)
                          ? (question.correctAnswer as string[]).join(", ")
                          : question.type === "True/False"
                          ? question.correctAnswer
                            ? "True"
                            : "False"
                          : question.choices[question.correctAnswer as number]}
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading questions...</p>
      )}

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {score !== null && (
        <div className="alert alert-info mt-3">
          <p>
            Your score: {score} / {questions.reduce((sum, q) => sum + q.points, 0)}
          </p>
          <p>Last attempted : {attemptInfo.attemptDate}</p>
        </div>
      )}

      <div className="d-flex">
        {isFaculty ? (
          <Link to={`/Courses/${cid}/Quizes/${qid}`}>
            <button className="btn btn-outline-secondary me-2">Back</button>
          </Link>
        ) : (
          hasExhaustedAttempts && (
            <button className="btn btn-outline-secondary me-2" onClick={() => navigate(-1)}>
              Back
            </button>
          )
        )}

        {questions.length > 0 && !hasExhaustedAttempts && (
          <button className="btn btn-primary mx-3" onClick={handleSubmit}>
            Submit
          </button>
        )}

        {attemptInfo.numberOfAttempts > 0 && (
          <button className="btn btn-primary" onClick={handleViewLastAttempt}>
            View Last Attempt
          </button>
        )}
      </div>
    </div>
  );
}
