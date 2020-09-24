import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburger, Header, Nav } from "../css/NavBarStyle";

function NavBar() {
    const [state, setState] = useState(true);
    return (
        <Nav>
            <Hamburger state={state} onClick={() => setState(!state)}>
                <div />
                <div />
                <br />
            </Hamburger>
            <Header state={state}>
                <ul onClick={() => setState(!state)}>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                </ul>
                <ul onClick={() => setState(!state)}>
                    <Link to="/">
                        <li>Cv Generator</li>
                    </Link>
                </ul>
                <ul onClick={() => setState(!state)}>
                    <Link to="/">
                        <li>More</li>
                    </Link>
                </ul>
            </Header>
        </Nav>
    );
}

export default NavBar;
