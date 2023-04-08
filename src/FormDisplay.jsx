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
    } else if (question.type === 'matrix') {
      return (
        <table>
          <thead>
            <tr>
              <th></th>
              {question.columns.map((column, columnIndex) => (
                <th key={columnIndex}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {question.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row}</td>
                {question.columns.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    <input type="radio" name={`${question.id}-${rowIndex}`} value={columnIndex} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (question.type === 'likert') {
      return (
        <table>
          <thead>
            <tr>
              <th></th>
              {question.scale.map((option, optionIndex) => (
                <th key={optionIndex}>{option}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {question.statements.map((statement, statementIndex) => (
              <tr key={statementIndex}>
                <td>{statement}</td>
                {question.scale.map((option, optionIndex) => (
                  <td key={optionIndex}>
                    <input type="radio" name={`${question.id}-${statementIndex}`} value={optionIndex} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (question.type === 'slider') {
      return (
        <div>
          <input
            type="range"
            min={question.minValue}
            max={question.maxValue}
            step={question.stepValue}
            defaultValue={question.minValue}
          />
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
