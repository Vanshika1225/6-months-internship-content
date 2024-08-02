import React, { useContext } from "react";
import { useState } from "react";
import { counterContext } from "../App";
const CounterPart = () => {
  const counter = useContext(counterContext);
  const [incCounter,setInCounter]=useState(counter)
  const incrementCounter = () => {
    setInCounter((prevCounter) => prevCounter + 1);
  };
  const decrementCounter = () => {
    setInCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <h1>{incCounter}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
    </>
  );
};

export default CounterPart;
