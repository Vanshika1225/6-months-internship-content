import React from "react";
import "./App.css";
import APIFetching from "./components/APIFetching";
// import APIFetchingUsingFetch from "./components/APIFetchingUsingFetch";

const App = () => {
  return (
    <div className="App">
      <APIFetching/>
      {/* <APIFetchingUsingFetch /> */}
    </div>
  );
};

export default App;
