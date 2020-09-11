import React from 'react'
import { NavLink } from 'react-router-dom'

function SingedOutLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/signup">SingUp</NavLink></li>
            <li><NavLink to="/singin">Loging</NavLink></li>
        </ul>
    )
}

export default SingedOutLinks;
