import React from 'react';

const FormDisplay = ({ questions }) => {
  return (
    <div>
      <h1>Form Preview</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          <input type="text" />
        </div>
      ))}
      <button>Submit</button>
    </div>
  );
};

export default FormDisplay;
