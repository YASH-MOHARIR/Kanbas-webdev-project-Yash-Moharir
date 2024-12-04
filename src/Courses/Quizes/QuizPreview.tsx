import React, { useEffect, useState } from "react";
import * as quizClient from "./client.ts";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  type: string; // Type of the question (e.g., "Multiple Choice", "True/False", "Fill in the Blank")
  points: number;
  text: string;
  choices?: string[]; // For Multiple Choice
  correctAnswer?: number | boolean | string[]; // Index, boolean, or array for blanks
}

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const { pathname } = useLocation();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch quiz questions from API
  const fetchQuizQuestions = async () => {
    try {
      const quiz = await quizClient.fetchQuizesInCourseByID(cid, qid);
      setQuestions(quiz.questionData);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
  };

  useEffect(() => {
    fetchQuizQuestions();
  }, [cid, qid]);

  const handleInputChange = (questionId: number, value: any) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    setError(null); // Clear previous errors
    let totalScore = 0;
    let allAnswered = true;

    for (const question of questions) {
      const userAnswer = userAnswers[question.id];

      // Check if the user answered the question
      if (userAnswer === undefined || (Array.isArray(userAnswer) && userAnswer.some((ans) => ans.trim() === ""))) {
        allAnswered = false;
        break;
      }

      // Calculate the score
      if (question.type === "Multiple Choice") {
        if (userAnswer === question.correctAnswer) {
          totalScore += question.points;
        }
      } else if (question.type === "True/False") {
        if (userAnswer === question.correctAnswer) {
          totalScore += question.points;
        }
      } else if (question.type === "Fill in the Blank") {
        const correctAnswers = question.correctAnswer as string[];
        const userBlanks = userAnswer as string[];

        // Partial marking for blanks
        const correctCount = correctAnswers.reduce((count, correctAnswer, index) => {
          return count + (userBlanks[index]?.trim().toLowerCase() === correctAnswer.trim().toLowerCase() ? 1 : 0);
        }, 0);

        const partialScore = (correctCount / correctAnswers.length) * question.points;
        totalScore += partialScore;
      }
    }

    if (!allAnswered) {
      setError("Please answer all questions before submitting.");
      return;
    }

    setScore(totalScore); // Set the total score
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4"> {pathname.includes("preview") ? "Quiz Preview" : "Quiz"}</h1>

      {questions.length > 0 ? (
        <ul className="list-group">
          {questions.map((question) => (
            <li key={question.id} className="list-group-item mb-3">
              <h5>{question.text}</h5>
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
                  {(question.correctAnswer as string[])?.map((_, index) => (
                    <div key={index} className="mb-2">
                      <label htmlFor={`blank-${question.id}-${index}`} className="form-label">
                        Blank {index + 1}:
                      </label>
                      <input
                        type="text"
                        id={`blank-${question.id}-${index}`}
                        className="form-control"
                        placeholder={`Enter answer for blank ${index + 1}`}
                        onChange={(e) => {
                          const blanks = userAnswers[question.id] || [];
                          blanks[index] = e.target.value;
                          handleInputChange(question.id, blanks);
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading questions...</p>
      )}

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {score !== null && (
        <div className="alert alert-success mt-3">
          Your score: {score.toFixed(2)} / {questions.reduce((sum, q) => sum + q.points, 0)}
        </div>
      )}

      <div className="d-flex">
        <Link to={`/Courses/${cid}/Quizes/${qid}`}>
          <button className="btn btn-outline-secondary me-2">Back</button>
        </Link>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
