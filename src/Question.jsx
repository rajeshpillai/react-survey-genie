import React, { useState } from 'react';

const Question = ({ question, updateQuestion, deleteQuestion }) => {
  const [questionText, setQuestionText] = useState(question.question);
  const [rows, setRows] = useState(question.rows || []);
  const [columns, setColumns] = useState(question.columns || []);

  const handleUpdate = () => {
    updateQuestion(question.id, { ...question, question: questionText, rows, columns });
  };

  const handleDelete = () => {
    deleteQuestion(question.id);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...question.options];
    newOptions[index] = event.target.value;
    updateQuestion(question.id, { ...question, options: newOptions });
  };

  const handleRowChange = (index, event) => {
    const newRows = [...rows];
    newRows[index] = event.target.value;
    setRows(newRows);
  };

  const handleColumnChange = (index, event) => {
    const newColumns = [...columns];
    newColumns[index] = event.target.value;
    setColumns(newColumns);
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

      {question.type === 'matrix' && (
        <div>
          <div>
            <h4>Rows</h4>
            {rows.map((row, index) => (
              <input key={index} type="text" value={row} onChange={(e) => handleRowChange(index, e)} />
            ))}
            <button onClick={() => setRows([...rows, ''])}>Add Row</button>
          </div>
          <div>
            <h4>Columns</h4>
            {columns.map((column, index) => (
              <input key={index} type="text" value={column} onChange={(e) => handleColumnChange(index, e)} />
            ))}
            <button onClick={() => setColumns([...columns, ''])}>Add Column</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Question;
