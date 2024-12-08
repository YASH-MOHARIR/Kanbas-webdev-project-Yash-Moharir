import React, { useEffect, useState } from "react";
import QuestionsTab from "./QuestionsTab.tsx";
import { useNavigate, useParams } from "react-router";

import * as quizClient from "./client.ts";
import ReactQuill from "react-quill";

interface Question {
  id: number;
  title: string;
  type: string; // Type of the question
  points: number; // Points assigned to the question
  text: string; // The question text
  choices?: string[]; // Choices for "Multiple Choice" questions
  correctAnswer: number | boolean | string[]; // Unified field for correct answer
  isEditing: boolean;
}

export default function NewQuiz() {
  const navigate = useNavigate();
  const { cid, qid } = useParams();

  useEffect(() => {
    if (qid) fetchThisQuizToUpdate(cid, qid);
  }, [qid]);

  const fetchThisQuizToUpdate = async (cid, qid) => {
    const thisQuizDataToUpdate = await quizClient.fetchQuizesInCourseByID(cid, qid);
    setQuizDetails(thisQuizDataToUpdate);
    setQuestions(thisQuizDataToUpdate.questionData);
  };
  

  const [activeTab, setActiveTab] = useState<"details" | "questions">("details");
  const [quizDetails, setQuizDetails] = useState({
    title: "Sample Quiz",
    description: "Sample Description",
    published: false,
    quizType: "Graded Quiz",
    points: 100,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true, // Yes/No
    timeLimit: 20,
    numberOfAttempts: 1,
    multipleAttempts: false, // Yes/No
    showCorrectAnswers: false,
    accessCode: "",
    oneQuestionAtATime: true, // Yes/No
    webcamRequired: false, // Yes/No
    lockQuestionsAfterAnswering: false, // Yes/No
    dueDate: "",
    availableFrom: "",
    untilDate: "",
  });

  const handleDetailsInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setQuizDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleMultipleAttemptsToggle = () => {
    setQuizDetails((prevDetails) => ({
      ...prevDetails,
      multipleAttempts: !prevDetails.multipleAttempts,
      numberOfAttempts: !prevDetails.multipleAttempts ? 2 : 1, // Default to 2 attempts if enabled, reset to 1 if disabled
    }));
  };
  ///
  const [questions, setQuestions] = useState<Question[]>([]);
  const [totalPoints, setTotalPoints] = useState();

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: Date.now(),
      title: "Sample Title",
      type: "Multiple Choice", // Default question type
      points: 1,
      text: "",
      choices: [],
      correctAnswer: -1,
      isEditing: true,
    };
    setQuestions((prev) => [...prev, newQuestion]);
  };

  const handleQuestionsInputChange = (
    id: number,
    field: keyof Question,
    value: string | number | boolean | string[]
  ) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, [field]: value } : q)));
  };

  const handleDescriptionChange = (content: string) => {
    setQuizDetails((prevDetails) => ({
      ...prevDetails,
      description: content,
    }));
  };

  const [errors, setErrors] = useState<string[]>([]); // State to store validation errors

  const validateForm = () => {
    const validationErrors: string[] = [];

    // Validate Title
    if (!quizDetails.title.trim()) {
      validationErrors.push("Title is required.");
    }

    // Validate Quiz Type
    const validQuizTypes = ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"];
    if (!validQuizTypes.includes(quizDetails.quizType)) {
      validationErrors.push("Invalid quiz type.");
    }

    // Validate Points
    if (quizDetails.points < 0) {
      validationErrors.push("Points cannot be negative.");
    }

    // Validate Dates
    if (!quizDetails.dueDate) {
      validationErrors.push("Due date is required.");
    }
    if (!quizDetails.availableFrom) {
      validationErrors.push("Available From date is required.");
    }
    if (quizDetails.availableFrom && quizDetails.untilDate) {
      if (new Date(quizDetails.availableFrom) > new Date(quizDetails.untilDate)) {
        validationErrors.push("Available From date must be earlier than Until date.");
      }
    }

    // Validate Questions
    if (questions.length === 0) {
      validationErrors.push("At least one question is required.");
    } else {
      questions.forEach((question, index) => {
        if (!question.text.trim()) {
          validationErrors.push(`Question ${index + 1} must have text.`);
        }

        if (question.points < 0) {
          validationErrors.push(`Question ${index + 1} points cannot be negative.`);
        }

        // Validate Multiple Choice Questions
        if (question.type === "Multiple Choice") {
          if (!question.choices || question.choices.length < 2) {
            validationErrors.push(`Question ${index + 1} (Multiple Choice) must have at least two choices.`);
          }
          if (
            typeof question.correctAnswer !== "number" ||
            question.correctAnswer < 0 ||
            question.correctAnswer >= question.choices.length
          ) {
            validationErrors.push(`Question ${index + 1} (Multiple Choice) must have a valid correct answer index.`);
          }
        }

        // Validate True/False Questions
        if (question.type === "True/False") {
          if (typeof question.correctAnswer !== "boolean") {
            validationErrors.push(`Question ${index + 1} (True/False) must have a correct answer of true or false.`);
          }
        }

        // Validate Fill in the Blank Questions
        if (question.type === "Fill in the Blank") {
          if (!Array.isArray(question.correctAnswer) || question.correctAnswer.length === 0) {
            validationErrors.push(`Question ${index + 1} (Fill in the Blank) must have at least one correct answer.`);
          }
        }
      });

      questions.forEach((question, index) => {
        if (!question.title.trim()) {
          validationErrors.push(`Question ${index + 1} must have a title.`);
        }
      });
    }

    // If there are errors, set them in the state and return false
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setErrors([]); // Clear errors if validation passes
    return true;
  };

  async function buildQuizData(isPublished) {
    if (!validateForm()) return;

    if (qid) {
      await quizClient.updateQuiz({
        ...quizDetails,
        points: totalPoints,
        questionData: questions,
        published: isPublished,
      });

      if (isPublished) {
        navigate(`/Courses/${cid}/Quizes/`);
      } else {
        navigate(`/Courses/${cid}/Quizes/${qid}`);
      }
    } else {
      const newQuizData = await quizClient.createNewQuiz(
        {
          ...quizDetails,
          points: totalPoints,
          questionData: questions,
          published: isPublished,
        },
        cid
      );

      if (isPublished) {
        navigate(`/Courses/${cid}/Quizes/`);
      } else {
        navigate(`/Courses/${cid}/Quizes/${newQuizData._id}`);
      }
    }
  }

  return (
    <div className="container mt-4">
      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => setActiveTab("details")}>
            Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
            onClick={() => setActiveTab("questions")}>
            Questions
          </button>
        </li>
      </ul>

      <div className="container mt-4">
        {errors.length > 0 && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Validation Errors:</strong>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setErrors([])} // Clear errors when dismissed
            ></button>
          </div>
        )}
      </div>

      {/* Details Tab */}
      {activeTab === "details" && (
        <form>
          <div className="row mb-3">
            {/* Title */}
            <label className="col-md-2 col-form-label">Title</label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="title"
                value={quizDetails.title}
                onChange={handleDetailsInputChange}
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="row mb-3">
            <label className="col-md-2 col-form-label">Description</label>
            <div className="col-md-10">
              <ReactQuill
                theme="snow"
                value={quizDetails.description}
                onChange={handleDescriptionChange}
                placeholder="Enter quiz description..."
              />
            </div>
          </div>

          {/* Access Code Field */}
          <div className="row mb-3">
            <label className="col-md-2 col-form-label">Access Code</label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="accessCode"
                value={quizDetails.accessCode}
                onChange={handleDetailsInputChange}
              />
            </div>
          </div>

          {/* Quiz Type */}
          <div className="row mb-3">
            <label className="col-md-2 col-form-label">Quiz Type</label>
            <div className="col-md-10">
              <select
                className="form-select"
                name="quizType"
                value={quizDetails.quizType}
                onChange={handleDetailsInputChange}>
                <option value="Graded Quiz">Graded Quiz</option>
                <option value="Practice Quiz">Practice Quiz</option>
                <option value="Graded Survey">Graded Survey</option>
                <option value="Ungraded Survey">Ungraded Survey</option>
              </select>
            </div>
          </div>

          {/* Assignment Group */}
          <div className="row mb-3">
            <label className="col-md-2 col-form-label">Assignment Group</label>
            <div className="col-md-10">
              <select
                className="form-select"
                name="assignmentGroup"
                value={quizDetails.assignmentGroup}
                onChange={handleDetailsInputChange}>
                <option value="Quizzes">Quizzes</option>
                <option value="Exams">Exams</option>
                <option value="Assignments">Assignments</option>
                <option value="Project">Project</option>
              </select>
            </div>
          </div>

          {/* Time Limit */}
          <div className="row mb-3">
            <label className="col-md-2 col-form-label">Time Limit (minutes)</label>
            <div className="col-md-10">
              <input
                type="number"
                className="form-control"
                name="timeLimit"
                value={quizDetails.timeLimit}
                onChange={handleDetailsInputChange}
                min={0}
              />
            </div>
          </div>

          {/* Multiple Attempts + Number Of Attempts */}
          <div className="row mb-3">
            <label className="col-md-2 col-form-label">Multiple Attempts</label>
            <div className="col-md-10">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="multipleAttemptsSwitch"
                  checked={quizDetails.multipleAttempts}
                  onChange={handleMultipleAttemptsToggle}
                />
                <label className="form-check-label" htmlFor="multipleAttemptsSwitch">
                  {quizDetails.multipleAttempts ? "Enabled" : "Disabled (Default : 1 Attempt)"}
                </label>
              </div>
              {quizDetails.multipleAttempts && (
                <div className="mt-2">
                  <label htmlFor="attemptsAllowed" className="form-label">
                    Number Of Attempts Allowed
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="attemptsAllowed"
                    min={1}
                    value={quizDetails.numberOfAttempts}
                    onChange={(e) =>
                      setQuizDetails((prevDetails) => ({
                        ...prevDetails,
                        numberOfAttempts: parseInt(e.target.value, 10),
                      }))
                    }
                  />
                </div>
              )}
            </div>
          </div>

          {/* Checkmarks */}
          <div className="row mb-3">
            <label className="col-md-2 col-form-label">Additional Options</label>
            <div className="col-md-10">
              {[
                { name: "shuffleAnswers", label: "Shuffle Answers" },
                { name: "showCorrectAnswers", label: "Show Correct Answers" },
                { name: "oneQuestionAtATime", label: "One Question at a Time" },
                { name: "webcamRequired", label: "Webcam Required" },
                { name: "lockQuestionsAfterAnswering", label: "Lock Questions After Answering" },
              ].map(({ name, label }) => (
                <div key={name} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={name}
                    name={name}
                    checked={quizDetails[name]}
                    onChange={handleDetailsInputChange}
                  />
                  <label className="form-check-label ms-2" htmlFor={name}>
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Dates Group */}
          <div className="row mb-3">
            <label className="col-md-2 col-form-label">Dates</label>
            <div className="col-md-10">
              {[
                { name: "dueDate", label: "Due" },
                { name: "availableFrom", label: "Available From" },
                { name: "untilDate", label: "Until" },
              ].map(({ name, label }) => (
                <div key={name} className="input-group mb-3">
                  <span className="input-group-text">{label}</span>
                  <input
                    type="date"
                    className="form-control"
                    name={name}
                    defaultValue={quizDetails[name].split("T")[0] || ""} // Use empty string if value is null
                    onChange={handleDetailsInputChange}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-4">
            <button
              type="button"
              className="btn btn-outline-danger me-2"
              onClick={() => navigate(`/Courses/${cid}/Quizes/`)}>
              Cancel
            </button>

            <div>
              <button type="button" className="btn btn-primary me-2" onClick={() => buildQuizData(false)}>
                {qid ? "Update" : "Save"}
              </button>
              <button type="button" className="btn btn-outline-success" onClick={() => buildQuizData(true)}>
                {qid ? "Update" : "Save"} and Publish
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Questions Tab */}
      {activeTab === "questions" && (
        <QuestionsTab
          questions={questions}
          setQuestions={setQuestions}
          totalPoints={totalPoints}
          setTotalPoints={setTotalPoints}
          handleAddQuestion={handleAddQuestion}
          handleQuestionsInputChange={handleQuestionsInputChange}
        />
      )}
    </div>
  );
}
