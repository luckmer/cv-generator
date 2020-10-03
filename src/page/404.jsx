import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

function IncorrectPage() {
    return (
        <Container>
            <h1>404 page </h1>
            <Link to="/">Home</Link>
        </Container>
    );
}

export default IncorrectPage;
