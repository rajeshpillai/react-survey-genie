import React, { useState } from 'react';
import Question from './Question';
import FormDisplay from './FormDisplay';

const FormBuilder = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (type) => {
    const newQuestion = {
      id: Date.now(),
      type: type,
      question: '',
      options: type === 'multipleChoice' ? ['Option 1', 'Option 2'] : [1, 2, 3, 4, 5],
    };

    if (type === 'matrix') {
      newQuestion.rows = [];
      newQuestion.columns = [];
    }

    if (type === 'likert') {
      newQuestion.statements = [];
      newQuestion.scale = [];
    }

    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id, updatedQuestion) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return updatedQuestion;
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <button onClick={() => addQuestion('text')}>Add Text Question</button>
      <button onClick={() => addQuestion('multipleChoice')}>Add Multiple Choice Question</button>
      <button onClick={() => addQuestion('ratingScale')}>Add Rating Scale Question</button>
      <button onClick={() => addQuestion('matrix')}>Add Matrix Question</button>
      <button onClick={() => addQuestion('likert')}>Add Likert Scale Question</button>
      <button onClick={() => addQuestion('slider')}>Add Slider Question</button>

      {questions.map((question) => (
        <Question key={question.id} question={question} updateQuestion={updateQuestion} deleteQuestion={deleteQuestion} />
      ))}
      <FormDisplay questions={questions} />
    </div>
  );
};

export default FormBuilder;
