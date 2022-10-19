import React from "react"

export default function About() {
    return <div>
        <ul>
            <li>
                {<h1>About!</h1>/* <Link to="about-app">About App</Link> */}
            </li>
            <li>
                <h3>About text</h3>{/* <Link to="about-author">About Author</Link> */}
            </li>
        </ul>
        {/* <Routes>
            <Route path=":slug" element={<SinglePage/>}/>
        </Routes> */}
    </div>
}