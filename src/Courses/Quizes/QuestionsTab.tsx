import React, {  useEffect } from "react";
import QuestionEditor from "./QuestionEditor.tsx";

function QuestionsTab({
  questions,
  setQuestions,
  totalPoints,
  setTotalPoints,
  handleAddQuestion,
  handleQuestionsInputChange,
}: {
  questions: any;
  setQuestions: any;
  totalPoints: any;
  setTotalPoints: any;
  handleAddQuestion: any;
  handleQuestionsInputChange: any;
}) {
  // Update total points whenever questions state changes
  useEffect(() => {
    const total = questions.reduce((sum, q) => sum + q.points, 0);
    setTotalPoints(total);
  }, [questions]);

  const handleSaveQuestion = (id: number) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, isEditing: false } : q)));
  };

  const handleCancelEdit = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleDeleteQuestion = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <div>
      <h3>Quiz Questions</h3>
      <p>Total Points: {totalPoints}</p>

      {/* Add New Question Button */}
      <button className="btn btn-primary mb-3" onClick={handleAddQuestion}>
        Add New Question
      </button>

      {/* Questions List */}
      <ul className="list-group">
        {questions.map((question) => (
          <li key={question.id} className="list-group-item">
            {question.isEditing ? (
              <QuestionEditor
                question={question}
                onSave={() => handleSaveQuestion(question.id)}
                onCancel={() => handleCancelEdit(question.id)}
                onInputChange={handleQuestionsInputChange}
              />
            ) : (
              <div>
                <h5>{question.title || "New Question"}</h5>
                <p>Type: {question.type}</p>
                <p>Points: {question.points}</p>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() => handleQuestionsInputChange(question.id, "isEditing", true)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDeleteQuestion(question.id)}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionsTab;
