import React from "react"
import { NavLink, Routes, Route,  } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = (props) => {
    return <div>
        <ul>
            <li>
                <NavLink to="/about-app">About App</NavLink>
            </li>
            <li>
            <NavLink to="/about-author">About Author</NavLink>
                {/* <NavLink to={`${url}/about-author`}>About Author</NavLink> */}
            </li>
        </ul>
        {/* <Routes>
            <Route path={`${path}/:slug`} element={<SinglePage/>}/>
        </Routes> */}
    </div>
}

export default About