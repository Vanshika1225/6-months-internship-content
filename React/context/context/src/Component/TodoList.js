import React, { useReducer } from "react";

function initialState(username) {
  let initialTodo = [];
  for (let i = 0; i < 1; i++) {
    initialTodo.push({
      id: i,
      text: username + "'s task #" + (i + 1),
    });
  }
  return {
    draft: "",
    todos: initialTodo,
  };
}

function reducer(state, action) {
  if (action.type === "chang_draft") {
    return {
      draft: action.next_draft,
      todos: state.todos,
    };
  } else if (action.type === "changed_draft") {
    return {
      draft: "",
      todos: [
        {
          id: state.todos.length,
          text: state.draft,
        },
        ...state.todos,
      ],
    };
  }
}

const TodoList = ({ username }) => {
  const [state, dispatch] = useReducer(reducer, initialState(username));
  return (
    <div>
      <input
        value={state.draft}
        onChange={(e) => {
          dispatch({
            type: "chang_draft",
            next_draft: e.target.value,
          });
        }}
      />

      <button
        onClick={() => {
          dispatch({ type: "changed_draft" });
        }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none" }}>
        {state.todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;