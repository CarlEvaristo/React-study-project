import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" alt="logo" width="40px"/>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <>
            <h1>Reasons I'm excited to learn React</h1>
            <ul>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ul>
        </>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Evaristo development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>  
            <Header/>
            <MainContent />
            <Footer />
        </>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))