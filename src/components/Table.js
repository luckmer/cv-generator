import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { TableDesign } from "../css/Table";
import { StoreContext } from "../store";

function Table(props) {
    const history = useHistory();

    const {
        PROPSDATA: [, setProp],
    } = useContext(StoreContext);

    const handleClick = () => {
        setProp({ PropsData: props.id });
        history.push("/edit");
    };

    return (
        <section>
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
                            <button onClick={props.clearTableData}>
                                Delete
                            </button>
                        </th>
                    </tr>
                </thead>
            </TableDesign>
        </section>
    );
}

export default Table;
