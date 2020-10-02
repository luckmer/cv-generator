import React from "react";
import BasicData from "../components/forms/BasicData";
import Experience from "../components/forms/Experience";
import Skills from "../components/forms/Skills";
import styled from "styled-components";
const Container = styled.div`
    margin: 15vh 0 0 0;
`;

function Table(props) {
    return (
        <Container>
            <input id={props.id} />
        </Container>
    );
}

export default Table;
