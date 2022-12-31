import React, { useState } from "react";
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('Register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "Register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
