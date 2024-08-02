import React, { useReducer } from "react";
import "../App.css";
import image from "./img.png";

const initialState = {
  displayData: [],
  modal: false,
  formData: "",
  checkboxChecked: false,
};
const reducer = (state, action) => {
  if (action.type === "ADD-TASK") {
    return {
      ...state,
      modal: true,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      modal: false,
    };
  } else if (action.type === "HANDLE_CHANGE") {
    return {
      ...state,
      formData: action.payload,
    };
  } else if (action.type === "HANDLE_SUBMIT") {
    return {
      ...state,
      displayData: [
        ...state.displayData,
        { task: action.payload, checked: false },
      ],
      formData: "",
      modal: false,
    };
  } else if (action.type === "HANDLE_CHECKBOX") {
    return {
      ...state,
      displayData: state.displayData.map((task, index) =>
        index === action.payload ? { ...task, checked: !task.checked } : task
      ),
    };
  } else if (action.type === "HANDLE_DELETE") {
    return {
      ...state,
      displayData: state.displayData.filter(
        (_, index) => action.payload !== index
      ),
    };
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTask = () => {
    dispatch({ type: "ADD-TASK" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleChange = (e) => {
    dispatch({ type: "HANDLE_CHANGE", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.formData.trim() !== "") {
      dispatch({ type: "HANDLE_SUBMIT", payload: state.formData });
    }
  };

  const handleCheckbox = (index) => {
    dispatch({ type: "HANDLE_CHECKBOX", payload: index });
  };

  const handleDelete = (index) => {
    dispatch({ type: "HANDLE_DELETE", payload: index });
  };
  return (
    <>
      {state.modal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter todo..."
                name="task"
                value={state.formData}
                onChange={handleChange}
              />
            </div>
            <button className="add-button-form">Add</button>
          </form>
          <span onClick={closeModal}>&times;</span>
        </div>
      )}

      <div className="first">
        <img src={image} alt="collapse-img"></img>
        <h3 className="header-section">Website todo</h3>
      </div>

      <div className="card">
        {state.displayData.length === 0 ? (
          <i style={{ fontSize: "30px" }}>No Data Found</i>
        ) : (
          <ul>
            {state.displayData.map((item, index) => {
              console.log(item.checked);
              return (
                <>
                  <div className="list-item">
                    <input
                      type="checkbox"
                      value={item.task}
                      onClick={() => handleCheckbox(index)}
                    ></input>
                    <li style={{ listStyle: "none" }}>{item.task}</li>

                    {item.checked && (
                      <button onClick={() => handleDelete(index)}>
                        delete
                      </button>
                    )}
                  </div>
                </>
              );
            })}
          </ul>
        )}
      </div>

      <div>
        <button className="add-button" onClick={handleAddTask}>
          + New task
        </button>
      </div>
    </>
  );
};

export default Todo;
