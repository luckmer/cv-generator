import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TableDesign } from "../css/Table";
import Index from "../components/forms/index";
import styled from "styled-components";
import { StoreContext } from "../store/index";

const Div = styled.div`
    opacity: ${({ open }) => (open ? 0 : 1)};
`;

function Table(props) {
    const [open, setOpen] = useState(false);
    const {
        DATAUPDATE: [editData],
    } = useContext(StoreContext);

    const { basicData, experienceData, skillsData } = editData;
    const handleSubmit = () => {
        props.editTask(props.id, basicData, experienceData, skillsData);
    };

    const View = (
        <TableDesign key={props.id}>
            <thead>
                <tr>
                    <th>title : {props.title}</th>
                    <th>
                        details:
                        <Link to={`/details/${props.id}`}>
                            <button>Details</button>
                        </Link>
                    </th>
                    <th>
                        Options :
                        <button onClick={() => props.setControlOpen(true)}>
                            <p onClick={() => setOpen(true)}>Edit</p>
                        </button>
                        <button onClick={props.clearTableData}>Delete</button>
                    </th>
                </tr>
            </thead>
        </TableDesign>
    );

    const CvGenerate = (
        <div>
            <Index />
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );

    return (
        <section>
            <Div>{props.controlOpen ? " " : View}</Div>
            <Div>{open ? CvGenerate : ""}</Div>
        </section>
    );
}

export default Table;
