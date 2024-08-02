import React, { useState } from "react";

const ListTask = ({ state, onChangeTask, onDeleteTask }) => {
  return (
    <div>
      {state.map((task) => (
        <li style={{ listStyle: "none" }} key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </div>
  );
};

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let textContent;
  if (isEditing) {
    textContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        ></input>
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save Changes
        </button>
      </>
    );
  } else {
    textContent = (
      <>
        {task.text}
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      {
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({ ...task, done: e.target.checked });
          }}
        />
      }
      {textContent}
      <button
        onClick={() => {
          onDelete(task.id);
        }}
      >
        Delete
      </button>
    </label>
  );
}

export default ListTask;
