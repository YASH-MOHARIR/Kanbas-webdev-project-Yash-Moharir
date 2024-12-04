import React from "react";

interface Question {
  id: number;
  type: string; // Type of the question
  points: number; // Points assigned to the question
  text: string; // The question text
  choices?: string[]; // Choices for "Multiple Choice" questions
  correctAnswer: number | boolean | string[]; // Unified field for correct answer
}

interface QuestionEditorProps {
  question: Question; // The question being edited
  onSave: () => void; // Callback to save changes
  onCancel: () => void; // Callback to cancel changes
  onInputChange: (
    id: number,
    field: keyof Question,
    value: string | number | boolean | string[]
  ) => void; // Callback to update question fields
}

const QuestionEditor: React.FC<QuestionEditorProps> = ({
  question,
  onSave,
  onCancel,
  onInputChange,
}) => {
  // Handle changes to individual choices for "Multiple Choice"
  const handleChoiceChange = (index: number, value: string) => {
    const newChoices = [...(question.choices || [])];
    newChoices[index] = value;
    onInputChange(question.id, "choices", newChoices);
  };

  const handleAddChoice = () => {
    const newChoices = [...(question.choices || []), ""];
    onInputChange(question.id, "choices", newChoices);
  };

  const handleRemoveChoice = (index: number) => {
    const newChoices = [...(question.choices || [])];
    newChoices.splice(index, 1);
    onInputChange(question.id, "choices", newChoices);
  };

  return (
    <div>
      {/* Dropdown to select question type */}
      <div className="row mb-3">
        <label className="col-md-2 col-form-label" htmlFor={`type-${question.id}`}>
          Question Type
        </label>
        <div className="col-md-10">
          <select
            id={`type-${question.id}`}
            className="form-select"
            value={question.type}
            onChange={(e) => onInputChange(question.id, "type", e.target.value)}
          >
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="True/False">True/False</option>
            <option value="Fill in the Blank">Fill in the Blank</option>
          </select>
        </div>
      </div>

      {/* Input for question points */}
      <div className="row mb-3">
        <label className="col-md-2 col-form-label" htmlFor={`points-${question.id}`}>
          Points
        </label>
        <div className="col-md-10">
          <input
            id={`points-${question.id}`}
            type="number"
            className="form-control"
            value={question.points}
            onChange={(e) =>
              onInputChange(question.id, "points", Math.max(1, parseInt(e.target.value, 10) || 1))
            }
            min={1}
          />
        </div>
      </div>

      {/* Input for question text */}
      <div className="row mb-3">
        <label className="col-md-2 col-form-label" htmlFor={`text-${question.id}`}>
          Question
        </label>
        <div className="col-md-10">
          <textarea
            id={`text-${question.id}`}
            className="form-control"
            value={question.text}
            onChange={(e) =>
              onInputChange(question.id, "text", e.target.value)
            }
          />
        </div>
      </div>

      {/* Dynamic fields based on question type */}
      {question.type === "Multiple Choice" && (
        <div>
          <h6>Choices</h6>
          {(question.choices || []).map((choice, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="radio"
                name={`correctChoice-${question.id}`}
                className="form-check-input me-2"
                checked={question.correctAnswer === index}
                onChange={() =>
                  onInputChange(question.id, "correctAnswer", index)
                }
              />
              <input
                type="text"
                className="form-control"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
              />
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveChoice(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button className="btn btn-secondary" onClick={handleAddChoice}>
            Add Choice
          </button>
        </div>
      )}

      {question.type === "True/False" && (
        <div>
          <h6>True/False</h6>
          <div className="form-check">
            <input
              type="radio"
              name={`trueFalse-${question.id}`}
              className="form-check-input"
              checked={question.correctAnswer === true}
              onChange={() => onInputChange(question.id, "correctAnswer", true)}
            />
            <label className="form-check-label">True</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name={`trueFalse-${question.id}`}
              className="form-check-input"
              checked={question.correctAnswer === false}
              onChange={() =>
                onInputChange(question.id, "correctAnswer", false)
              }
            />
            <label className="form-check-label">False</label>
          </div>
        </div>
      )}

{question.type === "Fill in the Blank" && (
  <div>
    <h6>Possible Answers</h6>
    {/* Initialize correctAnswer as an array if not already */}
    {(Array.isArray(question.correctAnswer) ? question.correctAnswer : []).map(
      (answer, index) => (
        <div key={index} className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            value={answer}
            placeholder={`Answer ${index + 1}`}
            onChange={(e) => {
              const newAnswers = Array.isArray(question.correctAnswer)
                ? [...question.correctAnswer]
                : [];
              newAnswers[index] = e.target.value;
              onInputChange(question.id, "correctAnswer", newAnswers);
            }}
          />
          <button
            className="btn btn-danger"
            onClick={() => {
              const newAnswers = Array.isArray(question.correctAnswer)
                ? [...question.correctAnswer]
                : [];
              newAnswers.splice(index, 1);
              onInputChange(question.id, "correctAnswer", newAnswers);
            }}
          >
            Remove
          </button>
        </div>
      )
    )}
    <button
      className="btn btn-secondary mt-2"
      onClick={() => {
        const newAnswers = Array.isArray(question.correctAnswer)
          ? [...question.correctAnswer]
          : [];
        newAnswers.push("");
        onInputChange(question.id, "correctAnswer", newAnswers);
      }}
    >
      Add Answer
    </button>
  </div>
)}



      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn btn-success" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default QuestionEditor;
