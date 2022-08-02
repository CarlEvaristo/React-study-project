import React from "react"

function Header() {
    return (
        <header>
            <nav>
                <img src=" ./react-logo.png" alt="logo" className="logo" />
                <ul id="headerMenu">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header