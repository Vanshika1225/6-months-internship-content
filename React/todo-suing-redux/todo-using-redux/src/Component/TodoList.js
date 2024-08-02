import React from "react";
import { getTodos } from "../redux/seletors";
import { connect } from "react-redux";

const TodoList = ({ todos, dispatch }) => {

  const handleToggleTodo = (id) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
          {todo.completed
            ? `${todo.inputData}-completed`
            : `${todo.inputData}-not completed`}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

export default connect(mapStateToProps)(TodoList);