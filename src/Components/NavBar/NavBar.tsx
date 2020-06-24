import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav role='navigation'>
                <div id="menuToggle">

                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <li><NavLink to='/PreJunior' >PreJunior</NavLink></li>
                        <li><NavLink to='/Junior' > Junior</NavLink></li>
                            <li><NavLink to='/Junior+' > Junior+</NavLink></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
