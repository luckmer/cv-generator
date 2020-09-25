import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TableDesign } from "../css/Table";
import Context from "../components/Update/Context";
function Table({ title, id, clearTableData }) {
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
                        Options :
                        <Link to={`/edit`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={clearTableData}>Delete</button>
                    </th>
                </tr>
            </thead>
        </TableDesign>
    );
}

export default Table;
