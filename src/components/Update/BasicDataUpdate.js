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
        editTask,
        DATAUPDATE: [editData, setEditData],
        PROPSDATA: [prop],
    } = useContext(StoreContext);
    const { PropsData } = prop;
    const id = PropsData;
    const { basicData, experienceData, skillsData } = editData;

    const handleDataChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleDataSubmit = () => {
        const test = basicData.concat(state);
        editTask(id, basicData, experienceData, skillsData);
        setEditData({ basicData: test, experienceData, skillsData });
    };

    return { handleDataSubmit, handleDataChange, state, editData };
}
