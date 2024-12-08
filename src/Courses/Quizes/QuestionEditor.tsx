import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's default styling

interface Question {
  id: number;
  type: string; // Type of the question
  points: number; // Points assigned to the question
  text: string; // The question text (Rich Text Editor)
  title: string; // Question title
  choices?: string[]; // Choices for "Multiple Choice" questions
  correctAnswer: number | boolean | string[]; // Unified field for correct answer
}

interface QuestionEditorProps {
  question: Question; // The question being edited
  onSave: () => void; // Callback to finalize saving changes
  onCancel: () => void; // Callback to discard changes
  onInputChange: (
    id: number,
    field: keyof Question,
    value: string | number | boolean | string[]
  ) => void; // Callback to update question fields in the parent
}

const QuestionEditor: React.FC<QuestionEditorProps> = ({
  question,
  onSave,
  onCancel,
  onInputChange,
}) => {
  // Local state copies for editing
  const [localTitle, setLocalTitle] = React.useState(question.title || "");
  const [localType, setLocalType] = React.useState(question.type);
  const [localPoints, setLocalPoints] = React.useState(question.points);
  const [localText, setLocalText] = React.useState(question.text || "");
  const [localChoices, setLocalChoices] = React.useState<string[]>(question.choices || []);
  const [localCorrectAnswer, setLocalCorrectAnswer] = React.useState(question.correctAnswer);

  // Handle saving: push changes up to parent, then call onSave to finalize
  const handleSaveClick = () => {
    onInputChange(question.id, "title", localTitle);
    onInputChange(question.id, "type", localType);
    onInputChange(question.id, "points", localPoints);
    onInputChange(question.id, "text", localText);
    onInputChange(question.id, "choices", localChoices);
    onInputChange(question.id, "correctAnswer", localCorrectAnswer);
    onSave();
  };

  // On cancel, just call onCancel without pushing changes
  const handleCancelClick = () => {
    onCancel();
  };

  // Choice-related handlers update local state only
  const handleChoiceChange = (index: number, value: string) => {
    const updatedChoices = [...localChoices];
    updatedChoices[index] = value;
    setLocalChoices(updatedChoices);
  };

  const handleAddChoice = () => {
    setLocalChoices((prev) => [...prev, ""]);
  };

  const handleRemoveChoice = (index: number) => {
    const updatedChoices = [...localChoices];
    updatedChoices.splice(index, 1);
    setLocalChoices(updatedChoices);
  };

  // For Fill in the Blank answers
  const handleAddBlankAnswer = () => {
    const answers = Array.isArray(localCorrectAnswer) ? [...localCorrectAnswer] : [];
    answers.push("");
    setLocalCorrectAnswer(answers);
  };

  const handleRemoveBlankAnswer = (index: number) => {
    if (Array.isArray(localCorrectAnswer)) {
      const answers = [...localCorrectAnswer];
      answers.splice(index, 1);
      setLocalCorrectAnswer(answers);
    }
  };

  const handleBlankAnswerChange = (index: number, value: string) => {
    if (Array.isArray(localCorrectAnswer)) {
      const answers = [...localCorrectAnswer];
      answers[index] = value;
      setLocalCorrectAnswer(answers);
    }
  };

  return (
    <div>
      {/* Title Input */}
      <div className="row mb-3">
        <label className="col-md-2 col-form-label" htmlFor={`title-${question.id}`}>
          Title
        </label>
        <div className="col-md-10">
          <input
            id={`title-${question.id}`}
            type="text"
            className="form-control"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            placeholder="Enter the question title"
          />
        </div>
      </div>

      {/* Dropdown to select question type */}
      <div className="row mb-3">
        <label className="col-md-2 col-form-label" htmlFor={`type-${question.id}`}>
          Question Type
        </label>
        <div className="col-md-10">
          <select
            id={`type-${question.id}`}
            className="form-select"
            value={localType}
            onChange={(e) => setLocalType(e.target.value)}
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
            value={localPoints}
            onChange={(e) => setLocalPoints(Math.max(1, parseInt(e.target.value, 10) || 1))}
            min={1}
          />
        </div>
      </div>

      {/* Rich Text Editor for question text */}
      <div className="row mb-3">
        <label className="col-md-2 col-form-label" htmlFor={`text-${question.id}`}>
          Question
        </label>
        <div className="col-md-10">
          <ReactQuill
            theme="snow"
            value={localText}
            onChange={setLocalText}
            placeholder="Enter the question text here..."
          />
        </div>
      </div>

      {/* Dynamic fields based on question type */}
      {localType === "Multiple Choice" && (
        <div>
          <h6>Choices</h6>
          {localChoices.map((choice, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="radio"
                name={`correctChoice-${question.id}`}
                className="form-check-input me-2"
                checked={localCorrectAnswer === index}
                onChange={() => setLocalCorrectAnswer(index)}
              />
              <input
                type="text"
                className="form-control"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
              />
              <button className="btn btn-danger" onClick={() => handleRemoveChoice(index)}>
                Remove
              </button>
            </div>
          ))}
          <button className="btn btn-secondary" onClick={handleAddChoice}>
            Add Choice
          </button>
        </div>
      )}

      {localType === "True/False" && (
        <div>
          <h6>True/False</h6>
          <div className="form-check">
            <input
              type="radio"
              name={`trueFalse-${question.id}`}
              className="form-check-input"
              checked={localCorrectAnswer === true}
              onChange={() => setLocalCorrectAnswer(true)}
            />
            <label className="form-check-label">True</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name={`trueFalse-${question.id}`}
              className="form-check-input"
              checked={localCorrectAnswer === false}
              onChange={() => setLocalCorrectAnswer(false)}
            />
            <label className="form-check-label">False</label>
          </div>
        </div>
      )}

      {localType === "Fill in the Blank" && (
        <div>
          <h6>Possible Answers</h6>
          {Array.isArray(localCorrectAnswer) &&
            localCorrectAnswer.map((answer, index) => (
              <div key={index} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={answer}
                  placeholder={`Answer ${index + 1}`}
                  onChange={(e) => handleBlankAnswerChange(index, e.target.value)}
                />
                <button className="btn btn-danger" onClick={() => handleRemoveBlankAnswer(index)}>
                  Remove
                </button>
              </div>
            ))}
          <button className="btn btn-secondary mt-2" onClick={handleAddBlankAnswer}>
            Add Answer
          </button>
        </div>
      )}

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2" onClick={handleCancelClick}>
          Cancel
        </button>
        <button className="btn btn-success" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default QuestionEditor;
