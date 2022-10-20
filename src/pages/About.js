import React from "react"
import { NavLink } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = (props) => {
    return <div className="about__content">
        <ul className="about__list">
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