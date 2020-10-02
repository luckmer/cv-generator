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

    const { basicData, experienceData, skillsData } = editData;

    const handleDataChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleDataSubmit = (e) => {
        e.preventDefault();
        const test = basicData.concat(state);
        setEditData({ basicData: test, experienceData, skillsData });
    };
    return (
        <form onSubmit={handleDataSubmit}>
            <input name="name" value={state.name} onChange={handleDataChange} />
            <input
                name="surname"
                value={state.surname}
                onChange={handleDataChange}
            />
            <input
                type="text"
                name="dataOfBirth"
                value={state.dataOfBirth}
                onChange={handleDataChange}
            />
            <input
                name="country"
                value={state.country}
                onChange={handleDataChange}
            />
            <input
                name="livingPlace"
                value={state.livingPlace}
                onChange={handleDataChange}
            />
            <input
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleDataChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BasicData;
