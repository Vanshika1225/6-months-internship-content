import React, { useReducer } from "react";

const initialState = { name: "vanshika", age: 0 };
const reducer = (state, action) => {
  if (action.type === "change_name") {
    return {
      name: action.nextName,
      age: state.age,
    };
  } else if (action.type === "icrement_age") {
    return {
      name: state.name,
      age: state.age + 1,
    };
  }
};
const ReduceExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e) => {
      dispatch({ type: "change_name", nextName: e.target.value });
    };
    const handleSubmit = () => {
      dispatch({ type: "icrement_age" });
    };
    return (
      <div>
        <input value={state.name} onChange={handleChange} />
        <button onClick={handleSubmit}>Increment age</button>
        <h4>
          Hello {state.name} , your age is {state.age}
        </h4>
      </div>
    );
}

export default ReduceExample