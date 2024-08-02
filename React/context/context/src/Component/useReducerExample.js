import React, { useReducer } from "react";
const reducerMethod = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};
const useReducerExample = () => {
  const [state, dispatch] = useReducer(reducerMethod, 0);
  return (
    <div>
      <h3>{state}</h3>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default useReducerExample;
