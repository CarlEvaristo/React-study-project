import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <>
            <h1>Hello</h1>
            <ul>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ul>
        </>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))