import React, { useContext, useState } from "react";
import { context, userContex } from "../App";

const FormPanel = () => {
//   const {setCurrentUser} = useContext(userContext);
  const theme = useContext(context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName.trim() !== "" && lastName.trim() !== "";
  return (
    <>
      <form className={theme}>
        <label>First name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => [setFirstName(e.target.value)]}
        />
        <label>Last name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {setLastName(e.target.value)}}
        />
        <button
          type="submit"
          disabled={canLogin}
          
        ></button>
      </form>
    </>
  );
};

export default FormPanel;
