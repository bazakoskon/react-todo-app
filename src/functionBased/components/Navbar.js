import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const links = [
    {
        id: 1,
        path: "/react-todo-app",
        text: "Home",
    },
    {
        id: 2,
        path: "/about",
        text: "About",
    },
]

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return <>
        <nav className="navBar">
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map((link, id) =>
                    <li key={id}>
                        <NavLink
                            to={link.path}
                            style={({ isActive }) => isActive
                                ? { color: 'orangered', textDecoration: 'underline' }
                                : { color: 'black', textDecoration: 'none' }
                            }
                            onClick={() => closeMenu()}
                            exact
                        >
                            {link.text}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    </>
}