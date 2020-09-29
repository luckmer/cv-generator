import React, { useState, useContext } from "react";
import { StoreContext } from "../../store/index";
import { nanoid } from "nanoid";
const initialState = {
    id: nanoid(),
    name: "",
    surname: "",
    dataOfBirth: "",
    country: "",
    livingPlace: "",
    phoneNumber: "",
};

function BasicData() {
    const [state, setState] = useState(initialState);
    const {
        DATAUPDATE: [editData, setEditData],
    } = useContext(StoreContext);
    const { basicData } = editData;

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const test = basicData.concat(state);
        setEditData({ basicData: test });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={state.name} onChange={handleChange} />
            <input
                name="surname"
                value={state.surname}
                onChange={handleChange}
            />
            <input
                type="text"
                name="dataOfBirth"
                value={state.dataOfBirth}
                onChange={handleChange}
            />
            <input
                name="country"
                value={state.country}
                onChange={handleChange}
            />
            <input
                name="livingPlace"
                value={state.livingPlace}
                onChange={handleChange}
            />
            <input
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BasicData;
