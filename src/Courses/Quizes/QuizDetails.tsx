import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as quizClient from "./client.ts";
import { MdEdit } from "react-icons/md";

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const [quizDetails, setQuizDetails] = useState({
    _id:"",
    title: "",
    quizType: "Graded Quiz",
    points: 0,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    numberOfAttempts :1,
    multipleAttempts: false,
    attemptsAllowed: 1,
    showCorrectAnswers: "",
    accessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    dueDate: "",
    availableFrom: "",
    untilDate: "",
    questionData: [],
  });

  useEffect(() => {
    if (qid) fetchThisQuizToUpdate(cid, qid);
  }, [qid]);

  
  const fetchThisQuizToUpdate = async (cid, qid) => {
    const thisQuizDataToUpdate = await quizClient.fetchQuizesInCourseByID(cid, qid);
    thisQuizDataToUpdate.points = calculateTotalPoints(thisQuizDataToUpdate.questionData);
    setQuizDetails(thisQuizDataToUpdate);
  };

  const calculateTotalPoints = (questionData) => {
    return questionData.reduce((total, question) => total + question.points, 0);
  };

  return (
    <div className="container mt-4">
      {/* Title and Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">{quizDetails.title}</h2>
        <div>
          <Link to={`/Courses/${cid}/Quizes/`}>
            <button className="btn btn-outline-secondary me-2">Back</button>
          </Link>
          <Link to={`/Courses/${cid}/Quizes/${qid}/preview`}>
            <button className="btn btn-outline-secondary me-2">Preview</button>
          </Link>
          <Link className="wd-quiz-link" to={`/Courses/${cid}/Quizes/${qid}/update`}>
            <button className="btn btn-outline-secondary">
              <MdEdit className="mx-2" />
              Edit
            </button>
          </Link>
        </div>
      </div>

      {/* Quiz Details */}
      <div className="row">
        <div className="d-flex">
          <p className="fw-bold col-6">Quiz Type:</p>
          <p className="col-6">{quizDetails.quizType}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Points:</p>
          <p className="col-6">{calculateTotalPoints(quizDetails.questionData)}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Assignment Group:</p>
          <p className="col-6">{quizDetails.assignmentGroup}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Shuffle Answers:</p>
          <p className="col-6">{quizDetails.shuffleAnswers ? "Yes" : "No"}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Time Limit:</p>
          <p className="col-6">{quizDetails.timeLimit} Minutes</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Multiple Attempts:</p>
          <p className="col-6">
            {quizDetails.multipleAttempts ? `Yes (${quizDetails.attemptsAllowed} Attempts)` : "No"}
          </p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Number Of Attempts:</p>
          <p className="col-6">{quizDetails.numberOfAttempts || "Not Configured"}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Show Correct Answers:</p>
          <p className="col-6">{quizDetails.showCorrectAnswers ? "Yes" : "No"}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Access Code:</p>
          <p className="col-6">{quizDetails.accessCode || "None"}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">One Question at a Time:</p>
          <p className="col-6">{quizDetails.oneQuestionAtATime ? "Yes" : "No"}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Webcam Required:</p>
          <p className="col-6">{quizDetails.webcamRequired ? "Yes" : "No"}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold col-6">Lock Questions After Answering:</p>
          <p className="col-6">{quizDetails.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
        </div>
      </div>

      <hr />

      {/* Dates Section */}
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex">
            <p className="fw-bold col-6">Due:</p>
            <p className="col-6">{new Date(quizDetails.dueDate).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex">
            <p className="fw-bold col-6">Available from:</p>
            <p className="col-6">{new Date(quizDetails.availableFrom).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex">
            <p className="fw-bold col-6">Until:</p>
            <p className="col-6">{new Date(quizDetails.untilDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
