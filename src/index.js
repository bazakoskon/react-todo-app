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
import TodoItemPage from "./functionBased/components/TodoItemPage"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="about/">
          <Route index element={<About />} />
          <Route path=":slug/" element={<SinglePage />} />
        </Route>
        <Route path="/todo-item/:id" element={<TodoItemPage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)