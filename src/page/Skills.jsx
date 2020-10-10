import React, { useContext } from "react";
import { StoreContext } from "../store/index";
import { SkillsContext } from "../imports/Index";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    padding: 10vh 0 0 0;
`;

export default function Skills() {
    const history = useHistory();
    const {
        editTask,
        PROPSDATA: [prop],
    } = useContext(StoreContext);
    const { PropsData } = prop;
    const id = PropsData;

    const handleSubmit = () => {
        
        editTask(id)
        history.push("/preview");
    };

    return (
        <Container>
            <SkillsContext onClick={handleSubmit} />
        </Container>
    );
}
