import React from 'react';

const FormDisplay = ({ questions }) => {
  const renderQuestion = (question) => {
    if (question.type === 'text') {
      return <input type="text" />;
    } else if (question.type === 'multipleChoice') {
      return (
        <div>
          {question.options.map((option, index) => (
            <div key={index}>
              <input type="radio" id={`${question.id}-${index}`} name={question.id} value={option} />
              <label htmlFor={`${question.id}-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      );
    } else if (question.type === 'ratingScale') {
      return (
        <div>
          {question.options.map((option, index) => (
            <div key={index}>
              <input type="radio" id={`${question.id}-${index}`} name={question.id} value={option} />
              <label htmlFor={`${question.id}-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Form Preview</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          {renderQuestion(question)}
        </div>
      ))}
      <button>Submit</button>
    </div>
  );
};

export default FormDisplay;
