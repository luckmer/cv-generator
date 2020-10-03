import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { TableDesign } from "../css/Table";
import Index from "../components/forms/index";
import styled from "styled-components";
import { StoreContext } from "../store/index";
const Div = styled.div`
    opacity: ${({ open }) => (open ? 0 : 1)};
`;

function Table(props) {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const {
        PROPSDATA: [, setProp],
    } = useContext(StoreContext);

    const handleClick = () => {
        setProp({ PropsData: props.id });
        history.push("/edit");
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
                        <button onClick={handleClick}>
                            <p>Edit</p>
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
            <div onClick={() => props.setControlOpen(false)}>
                <button>
                    <p onClick={() => setOpen(false)}>Edit</p>
                </button>
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
