import React from "react";
import Skills from "../components/forms/Skills";
import Experience from "../components/forms/Experience";
import BasicData from "../components/forms/BasicData";

import styled from "styled-components";

const Container = styled.div`
    padding: 10vh 0 0 0;
`;

function Context({ match }) {
    return (
        <Container>
            <Experience match={match} />
            <BasicData match={match} />
            <Skills match={match} />
        </Container>
    );
}

export default Context;
