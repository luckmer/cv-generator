import React, { useState, useContext } from "react";
import { Container, CreateContext } from "../css/LandingPageStyle";
import CreateCV from "../components/CreateCv";
import { StoreContext } from "../store/index";
import Table from "../components/Table";
import styled from "styled-components";
import Filter from "../components/Filter/Filter";
const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 10vw 10px 10vw;
`;

function LandingPage() {
    const [open, setOpen] = useState(false);

    const {
        clearTableData,
        DATA: [table],
    } = useContext(StoreContext);
    const { data } = table;

    return (
        <Container>
            <CreateCV open={open} setOpen={setOpen} />
            <CreateContext>
                <Filter setOpen={setOpen} open={open} />
            </CreateContext>
            <TableContainer>
                {data.map(({ title, id }) => (
                    <Table
                        key={id}
                        title={title}
                        id={id}
                        clearTableData={clearTableData}
                    />
                ))}
            </TableContainer>
        </Container>
    );
}

export default LandingPage;
