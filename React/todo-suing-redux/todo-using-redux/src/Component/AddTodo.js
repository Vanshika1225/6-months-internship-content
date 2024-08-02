import React, { useState } from 'react';
import { connect } from 'react-redux';

let nextTodoId=0

const AddTodo = ({ dispatch }) => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => {
   setInputData(e.target.value)
  };

  const handleAddTodo = () => {
    dispatch({type:'ADD_TODO',payload:{id:++nextTodoId,inputData}})
    setInputData('');
  };

  return (
    <>
      <h1>Add Todo</h1>
      <input type='text' value={inputData} onChange={handleChange}/>
      <button onClick={handleAddTodo}>Add Task</button> 
    </>
  );
};

export default connect()(AddTodo);
