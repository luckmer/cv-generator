import React, { useState, useContext } from "react";
import {
    Container,
    CreateContext,
    TableContainer,
} from "../css/LandingPageStyle";
import { StoreContext } from "../store";
import { Filter, Table, CreateCV } from "../imports/Index";

function LandingPage() {
    const [open, setOpen] = useState(false);
    const [controlOpen, setControlOpen] = useState(false);
    const {
        clearTableData,
        DATA: [table, setTable],
    } = useContext(StoreContext);
    const { data } = table;

    const editTask = (id, basicData, experienceData, skillsData) => {
        const edited = data.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    title: task.title,
                    BasicData: basicData,
                    experienceData: experienceData,
                    SkillData: skillsData,
                };
            }
            return task;
        });
        setTable({ data: edited });
    };

    return (
        <Container controlOpen={controlOpen}>
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
                        setControlOpen={setControlOpen}
                        controlOpen={controlOpen}
                        clearTableData={clearTableData}
                        editTask={editTask}
                    />
                ))}
            </TableContainer>
        </Container>
    );
}

export default LandingPage;
