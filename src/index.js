import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About'
import NotMatch from './pages/NotMatch'
import TodoContainer from "./functionBased/components/TodoContainer"
import Navbar from "./functionBased/components/Navbar"
import SinglePage from './pages/SinglePage'
//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="about/" element={<About />} />
        <Route path="*" element={<NotMatch />} />
        <Route path="about/about-app/" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)