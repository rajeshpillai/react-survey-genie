import React, { useState } from 'react';

const Question = ({ question, updateQuestion, deleteQuestion }) => {
  const [questionText, setQuestionText] = useState(question.question);

  const handleUpdate = () => {
    updateQuestion(question.id, { ...question, question: questionText });
  };

  const handleDelete = () => {
    deleteQuestion(question.id);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...question.options];
    newOptions[index] = event.target.value;
    updateQuestion(question.id, { ...question, options: newOptions });
  };

  return (
    <div>
      <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
      <button onClick={handleUpdate}>Update Question</button>
      <button onClick={handleDelete}>Delete Question</button>
      {question.type === 'multipleChoice' &&
        question.options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e)}
          />
        ))}
      {question.type === 'ratingScale' && <p>Rating scale from {question.options[0]} to {question.options.slice(-1)}</p>}
    </div>
  );
};

export default Question;
