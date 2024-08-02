// App.js
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import UserDetails from "./Components/UserDetails";

export const GlobalContext = createContext(null);

function App() {
  const [mode, setMode] = useState("light");

  const [state, setState] = useState({ email: "", password: "" });

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <div className={`${mode}`}>
        <div className="container">
          <BrowserRouter>
            <Navbar
              mode={mode}
              toggleMode={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/UserDetails" element={<UserDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
