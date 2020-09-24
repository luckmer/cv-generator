import React, { useState, useContext } from "react";
import { Container, CreateContext } from "../css/LandingPageStyle";
import CreateCV from "../components/CreateCv";
import { StoreContext } from "../store/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Main = styled.div``;

function LandingPage() {
    const [open, setOpen] = useState(false);
    const {
        DATA: [table, setTable],
    } = useContext(StoreContext);
    const { data } = table;
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
            <Main>
                {data.map(({ title, id }) => (
                    <div key={id}>
                        <Link to={`/details/${id}`}>{title}</Link>
                    </div>
                ))}
            </Main>
        </Container>
    );
}

export default LandingPage;
