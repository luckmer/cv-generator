import React, { useState, useContext } from "react";
import { Container, CreateContext } from "../css/LandingPageStyle";
import CreateCV from "../components/CreateCv";
import { StoreContext } from "../store/index";
import Table from "../components/Table";
import styled from "styled-components";

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
        DATA: [table, setTable],
    } = useContext(StoreContext);
    const { data } = table;
    console.log(data);
    return (
        <Container>
            <CreateCV open={open} />
            <CreateContext>
                <div>
                    <input />
                    <select>
                        <option>option</option>
                        <option>option</option>
                        <option>option</option>
                        <option>option</option>
                    </select>
                    <select>
                        <option> option</option>
                        <option> option</option>
                        <option> option</option>
                        <option> option</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => setOpen(!open)}>Create</button>
                </div>
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
