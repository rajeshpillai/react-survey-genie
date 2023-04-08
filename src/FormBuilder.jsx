import React, { useState } from 'react';
import Question from './Question';
import FormDisplay from './FormDisplay';

const FormBuilder = () => {
  const [questions, setQuestions] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), type: 'text', question: '' }]);
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

  const toggleFormDisplay = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={toggleFormDisplay}>Preview Form</button>
      {questions.map((question) => (
        <Question key={question.id} question={question} updateQuestion={updateQuestion} deleteQuestion={deleteQuestion} />
      ))}
      {displayForm && <FormDisplay questions={questions} />}
    </div>
  );
};

export default FormBuilder;
