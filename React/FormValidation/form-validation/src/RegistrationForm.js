import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const RegistrationhtmlForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [record, setRecord] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleFormSubmit = (data) => {
    const newRecord = { ...data, id: new Date().getTime().toString() };
    setRecord([...record, newRecord]);
    setInput({ userName: "", email: "", password: "", phoneNumber: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="userName">Full Name :</label>
          <input
            type="text"
            onChange={handleChange}
            value={input.userName}
            name="userName"
            ref={register({ required: true })}
          />
          {errors.userName && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            onChange={handleChange}
            value={input.email}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            onChange={handleChange}
            value={input.password}
            name="password"
            id="password"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number :</label>
          <input
            type="text"
            onChange={handleChange}
            value={input.phoneNumber}
            name="phoneNumber"
            id="phoneNumber"
          />
        </div>
        <button type="submit">Register Here</button>
      </form>

      <div>
        {record.map((currElement) => {
          return (
            <table key={currElement.id}> {/* Added key prop */}
              <tbody>
                <tr>
                  <td>Username:</td>
                  <td>Email:</td>
                  <td>Password:</td>
                  <td>Phone Number:</td>
                </tr>
                <tr>
                  <td>{currElement.userName}</td>
                  <td>{currElement.email}</td>
                  <td>{currElement.password}</td>
                  <td>{currElement.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
};

export default RegistrationhtmlForm;
