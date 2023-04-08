import React, { useState } from 'react';

const Question = ({ question, updateQuestion, deleteQuestion }) => {
  const [questionText, setQuestionText] = useState(question.question);

  // Multiple Choice question type
  const [rows, setRows] = useState(question.rows || []);
  const [columns, setColumns] = useState(question.columns || []);

  // Likert Scale question type
  const [statements, setStatements] = useState(question.statements || []);
  const [scale, setScale] = useState(question.scale || []);

  // Slider  question type
  const [minValue, setMinValue] = useState(question.minValue || 0);
  const [maxValue, setMaxValue] = useState(question.maxValue || 100);
  const [stepValue, setStepValue] = useState(question.stepValue || 1);

  // Image Choice question type
  const [imageOptions, setImageOptions] = useState(question.imageOptions || []);


  const handleUpdate = () => {
    updateQuestion(question.id, { ...question, question: questionText, statements, scale, minValue, maxValue, stepValue, imageOptions  });
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

  const handleStatementChange = (index, event) => {
    const newStatements = [...statements];
    newStatements[index] = event.target.value;
    setStatements(newStatements);
  };

  const handleScaleChange = (index, event) => {
    const newScale = [...scale];
    newScale[index] = event.target.value;
    setScale(newScale);
  };

  const handleImageOptionChange = (index, event) => {
    const newImageOptions = [...imageOptions];
    newImageOptions[index] = event.target.value;
    setImageOptions(newImageOptions);
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

      {question.type === 'likert' && (
        <div>
          <div>
            <h4>Statements</h4>
            {statements.map((statement, index) => (
              <input key={index} type="text" value={statement} onChange={(e) => handleStatementChange(index, e)} />
            ))}
            <button onClick={() => setStatements([...statements, ''])}>Add Statement</button>
          </div>
          <div>
            <h4>Scale</h4>
            {scale.map((option, index) => (
              <input key={index} type="text" value={option} onChange={(e) => handleScaleChange(index, e)} />
            ))}
            <button onClick={() => setScale([...scale, ''])}>Add Scale Option</button>
          </div>
        </div>
      )}

      {question.type === 'slider' && (
        <div>
          <label>Min Value: <input type="number" value={minValue} onChange={(e) => setMinValue(e.target.value)} /></label>
          <label>Max Value: <input type="number" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} /></label>
          <label>Step Value: <input type="number" value={stepValue} onChange={(e) => setStepValue(e.target.value)} /></label>
        </div>
      )}

      {question.type === 'imageChoice' && (
        <div>
          <h4>Image URLs</h4>
          {imageOptions.map((imageOption, index) => (
            <input key={index} type="text" value={imageOption} onChange={(e) => handleImageOptionChange(index, e)} />
          ))}
          <button onClick={() => setImageOptions([...imageOptions, ''])}>Add Image Option</button>
        </div>
      )}

    </div>
   );
   
};

export default Question;
