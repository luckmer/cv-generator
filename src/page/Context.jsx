import React, { useContext } from "react";
import Index from "../components/forms/index";
import { StoreContext } from "../store/index";

import styled from "styled-components";

const Container = styled.div`
    padding: 10vh 0 0 0;
`;

function Context() {
    const {
        editTask,
        DATAUPDATE: [editData],
        PROPSDATA: [prop],
    } = useContext(StoreContext);
    const { basicData, experienceData, skillsData } = editData;
    const { PropsData } = prop;
    const id = PropsData;
    const handleSubmit = () => {
        editTask(id, basicData, experienceData, skillsData);
    };

    return (
        <Container>
            <Index />
            <button onClick={handleSubmit}>Submit</button>
        </Container>
    );
}

export default Context;
