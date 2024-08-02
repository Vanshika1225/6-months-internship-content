import React, { useState } from 'react'

const AddTask = ({onAddTask}) => {
  const [task,addTask]=useState('');
  return (
    <div>
        <input placeholder='add task' value={task} onChange={(e)=>addTask(e.target.value)}/>
        <button onClick={()=>{
          addTask('');
          onAddTask(task)
        }}>Add</button>
    </div>
  )
}

export default AddTask