import React from "react"
import { NavLink } from "react-router-dom"
const links = [
    {
        id: 1,
        path: "/",
        text: "Home",
    },
    {
        id: 2,
        path: "/about",
        text: "About",
    },
]
// const Navbar = () => {


//     return (
//         <nav className="navBar">
//             <ul>
//                 {links.map(link => {
//                     return (
//                         <li key={link.id}>
//                             <NavLink to={link.path} activeClassName="active-link" exact>
//                                 {link.text}
//                             </NavLink>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </nav>
//     )
// }
// export default Navbar

export default function Navbar() {
    return <>
        <nav className="navBar">
            <ul>
                {links.map((link, id) =>
                    <li key={id}>
                        <NavLink
                            to={link.path}
                            style={({ isActive }) => isActive
                                ? { color: 'orangered', textDecoration: 'underline' }
                                : { color: 'black', textDecoration: 'none' }
                            }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    </>
}