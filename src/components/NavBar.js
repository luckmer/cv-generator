import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 1vh 5vw 1vh 5vw;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: 11px 11px 52px -14px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 850px) {
        background-color: none;
        box-shadow: none;
    }
`;

const Header = styled.div`
    padding: 0 10vw 0 10vw;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin: 2px 5px 2px 5px;
    ul {
        align-items: center;
        list-style: none;
    }
    li {
        padding: 10px;
    }
    @media screen and (max-width: 850px) {
        padding: 7vh 2vw 7vh 3vw;
        align-items: center;
        flex-flow: column nowrap;
        position: fixed;
        color: black;
        background-color: #f0f0f0;
        transform: ${({ state }) =>
            state ? "translateY(0)" : "translateY(-100%)"};
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease-in-out;
    }
`;

const Hamburger = styled.div`
    display: none;
    @media screen and (max-width: 850px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        width: 2rem;
        height: 3rem;
        position: fixed;
        top: 15px;
        right: 20px;
        z-index: 999;
        div {
            width: 5vw;
            height: 2px;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 1s ease;
            background-color: ${({ state }) => (state ? "black" : " blue")};
        }
    }
`;

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
                    <li>Home</li>
                </ul>
                <ul onClick={() => setState(!state)}>
                    <li>Cv Generator</li>
                </ul>
                <ul onClick={() => setState(!state)}>
                    <li>More</li>
                </ul>
            </Header>
        </Nav>
    );
}

export default NavBar;
