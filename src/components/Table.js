import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TableDesign } from "../css/Table";

function Table({ title, id, clearTableData }) {
    console.log(id);
    return (
        <TableDesign key={id}>
            <thead>
                <tr>
                    <th>title : {title}</th>
                    <th>
                        details:
                        <Link to={`/details/${id}`}>
                            <button>Details</button>
                        </Link>
                    </th>
                    <th>
                        Options : <button>Edit</button>
                        <button onClick={clearTableData}>Delete</button>
                    </th>
                </tr>
            </thead>
        </TableDesign>
    );
}

export default Table;
