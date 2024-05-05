import React, { Component } from "react";
import { Home } from "../pages/home";
import { Login, Loign } from "../pages/login";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={ <Login />} />
        </Routes>
      </Router>
    )
  }


export default App