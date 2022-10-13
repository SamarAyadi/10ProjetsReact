import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                LISTE
            </Link>
            <Link to="/stateAnim">
                STATE
            </Link>
            <Link to="/scroll">
                SCROLL
            </Link>
        </nav>
    )
}
