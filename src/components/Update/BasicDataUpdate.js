import { useState, useContext } from "react";
import { StoreContext } from "../../store";
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

export default function BasicDataUpdate() {
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
    return { handleDataSubmit, handleDataChange, state };
}
