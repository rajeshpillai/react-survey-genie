import React, { useState } from 'react';

const Question = ({ question, updateQuestion, deleteQuestion }) => {
  const [questionText, setQuestionText] = useState(question.question);

  const handleUpdate = () => {
    updateQuestion(question.id, { ...question, question: questionText });
  };

  const handleDelete = () => {
    deleteQuestion(question.id);
  };

  return (
    <div>
      <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
      <button onClick={handleUpdate}>Update Question</button>
      <button onClick={handleDelete}>Delete Question</button>
    </div>
  );
};

export default Question;
