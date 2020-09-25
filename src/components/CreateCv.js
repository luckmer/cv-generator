import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { StoreContext } from "../store/index";
import styled from "styled-components";

const Container = styled.div`
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
`;

const Form = styled.form`
    z-index: 200;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        margin: 0 20px 0 20px;
        background-color: #212529;
        color: #ffffff;
        font-weight: bold;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 5px;
    }
    button {
        background-color: #212529;
        color: #ffffff;
        font-weight: bold;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 5px;
        margin: 0 20px 0 20px;
    }
`;

const Black = styled.div`
    z-index: -1;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
`;

function CreateCv({ open, setOpen }) {
    const [create, setCreate] = useState("");
    const {
        DATA: [table, setTable],
    } = useContext(StoreContext);
    const { data } = table;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (create) {
            const newCv = {
                id: nanoid(),
                title: create,
            };
            const test = data.concat(newCv);
            setTable({ data: test });
            setCreate("");
        }
    };

    const newCv = (
        <Container>
            <Black />
            <Form onSubmit={handleSubmit}>
                <input
                    placeholder="create new cv "
                    type="text "
                    value={create}
                    onChange={(e) => setCreate(e.target.value)}
                />
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={() => setOpen(!open)}>Close</button>
                </div>
            </Form>
        </Container>
    );

    return <div>{open ? newCv : ""}</div>;
}

export default CreateCv;
