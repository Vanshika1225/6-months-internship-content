import React, { useState } from "react";
import { getTodos } from "../redux/seletors"; 
import { connect } from "react-redux";

const VisibilityFilter = ({ todos }) => {
  const [visibilityFilter, setVisibilityFilter] = useState("All");

  // console.log("todos:", todos);

  const showAll = () => {
    switch (visibilityFilter) {
      case "All":
        return todos;
      case "Completed":
        return todos.filter(todo => todo.completed);
      case "Not Completed":
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  // console.log("Filtered todos:", showAll()); 

  return (
    <div>
      <h2>VISIBILITY FILTER</h2>
      <button onClick={() => setVisibilityFilter("All")}>All</button>
      <button onClick={() => setVisibilityFilter("Completed")}>Completed</button>
      <button onClick={() => setVisibilityFilter("Not Completed")}>Not Completed</button>

      {showAll().map((todo) => (
        <div key={todo.id}>
          <h6>{todo.inputData}</h6>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

export default connect(mapStateToProps)(VisibilityFilter);
