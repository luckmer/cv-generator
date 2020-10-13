  
import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { StoreContext } from "../store";
import { Container, Black, Form } from "../css/CreateCvStyle";

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
                experienceData: [],
                SkillData: [],
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
                <div>
                <input
                    placeholder="create new cv "
                    type="text "
                    value={create}
                    onChange={(e) => setCreate(e.target.value)}
                />
                    <button type="submit">Submit</button>
                    <button onClick={() => setOpen(!open)}>Close</button>
                </div>
            </Form>
        </Container>
    );

    return <div>{open ? newCv : ""}</div>;
}

export default CreateCv;