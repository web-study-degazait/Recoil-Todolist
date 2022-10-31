import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";

function App() {
  return <TodoTemplate />;
}

export default App;
