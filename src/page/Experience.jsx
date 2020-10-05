import React, { useContext } from "react";
import { StoreContext } from "../store/index";
import { Experience } from "../imports/Index";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    padding: 10vh 0 0 0;
`;

function ExperienceContext() {
    const history = useHistory();
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
        history.push("/skills");
    };

    return (
        <Container>
            <Experience onClick={handleSubmit} />
        </Container>
    );
}

export default ExperienceContext;
