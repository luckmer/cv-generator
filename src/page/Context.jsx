import React, { useContext } from "react";
import { StoreContext } from "../store/index";
import Table from "../components/Table";
import styled from "styled-components";

const Container = styled.div`
    padding: 10vh 0 0 0;
`;

function Context() {
    const {
        clearTableData,
        DATA: [table],
    } = useContext(StoreContext);
    const { data } = table;

    const editTask = () => {};

    return (
        <Container>
            {data.map(({ title, id }) => (
                <Table
                    key={id}
                    title={title}
                    id={id}
                    clearTableData={clearTableData}
                    editTask={editTask}
                />
            ))}
        </Container>
    );
}

export default Context;
// <Container>
//     <Experience match={match} />
//     <BasicData match={match} />
//     <Skills match={match} />
// </Container>
