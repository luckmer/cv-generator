import React from "react";
import BasicData from "./BasicData";
import Experience from "./Experience";
import Skills from "./Skills";

import styled from "styled-components";
const Container = styled.div`
    margin: 0 0 0 3em;
`;
function index() {
    return (
        <Container>
            <BasicData />
            <Experience />
            <Skills />
        </Container>
    );
}

export default index;
