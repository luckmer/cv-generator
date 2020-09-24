import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { StoreContext } from "../store/index";
import styled from "styled-components";

const Container = styled.div`
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Form = styled.form`
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
    }
`;

function CreateCv({ open }) {
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
            <Form onSubmit={handleSubmit}>
                <input
                    placeholder="create new cv "
                    type="text "
                    value={create}
                    onChange={(e) => setCreate(e.target.value)}
                />
                <button type="submit">Submit</button>
            </Form>
        </Container>
    );

    return <div>{open ? newCv : ""}</div>;
}

export default CreateCv;
