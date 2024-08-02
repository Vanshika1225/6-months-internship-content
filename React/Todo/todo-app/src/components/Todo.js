import React, { useState } from "react";
import "../App.css";
import image from "./img.png";

const Todo = () => {
  const [displayData, setDisplayData] = useState("");

  const [modal, setModal] = useState(false);

  const [formData, setFormData] = useState({
    task: "",
  });

  const [checkboxChecked, seyCheckboxChecked] = useState(false);

  const handleAddTask = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData ,checked:false};
    console.log(newData);
    setDisplayData((prevData) => [...prevData, newData]);
    setFormData({
      task: "",
    });
    closeModal();
  };

  const handleCheckbox = (index) => {
    const newData=[...displayData];
    newData[index].checked = !newData[index].checked ;
    seyCheckboxChecked(!checkboxChecked);
  };

  const handleDelete=(index)=>{
    console.log("deleted")
    console.log(formData);
    const data=[...displayData];
    data.splice(index,1);
    setDisplayData(data);
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter todo..."
                name="task"
                value={formData.task}
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
        {displayData.length === 0 ? (
          <i style={{ fontSize: "30px" }}>No Data Found</i>
        ) : (
          <ul>
            {displayData.map((item, index) => {
              return (
                <>
                  <div className="list-item">
                    <input
                      type="checkbox"
                      value={item.task}
                      onClick={()=>handleCheckbox(index)}
                    ></input>
                    <li style={{ listStyle: "none" }}>
                      {item.task}
                    </li>
                    {item.checked && <button onClick={()=>handleDelete(index)} style={{marginLeft:'60px'}}> delete</button>}
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
