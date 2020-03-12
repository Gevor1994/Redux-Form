import React from 'react';
import './App.css';
import WebPage from "./Components/WebPage";
import Register from "./Register";
import Login from "./Login";
import { Translate } from 'react-i18nify-lite';


function App() {
  return (
    <div className="page__wrapper">
      <Register/>
      <Login/>
    </div>
  );
}

export default App;
