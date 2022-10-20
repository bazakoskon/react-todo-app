import React from "react"
import { NavLink } from "react-router-dom"

const About = (props) => {
    return <div>
        <ul>
            <li>
                <NavLink to="/about/about-app">About App</NavLink>
            </li>
            <li>
            <NavLink to="/about/about-author">About Author</NavLink>
            </li>
            </ul>
    </div>
}

export default About