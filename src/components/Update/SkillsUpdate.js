import { useState, useContext } from "react";
import { StoreContext } from "../../store/index";
import { nanoid } from "nanoid";
const initialState = {
    abilities: [],
    Activity: [],
    Interests: "",
    links: [],
    personalData: "",
};

export default function SkillsUpdate() {
    const [state, setState] = useState(initialState);
    const {
        DATAUPDATE: [editData, setEditData],
    } = useContext(StoreContext);
    const [text, setText] = useState({ as: "", ay: "", ls: "", pd: "" });
    const { basicData, experienceData } = editData;
    const { abilities, Activity, links, personalData } = state;
    const Data = basicData.concat(state);
    const { as, ay, ls } = text;

    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
    };

    const abilitiesSubmit = (e) => {
        e.preventDefault();
        const newData = { id: nanoid(), data: as };
        const test = abilities.concat(newData);
        setEditData({ experienceData, basicData, skillsData: Data });
        setState({ abilities: test, Activity, links, personalData });
    };

    const activitySubmit = (e) => {
        e.preventDefault();
        const newData = { id: nanoid(), data: ay };
        const test = abilities.concat(newData);
        setEditData({ experienceData, basicData, skillsData: Data });
        setState({ abilities, Activity: test, links, personalData });
    };

    const linksSubmit = (e) => {
        e.preventDefault();
        const newData = { id: nanoid(), data: ls };
        const test = abilities.concat(newData);
        setEditData({ experienceData, basicData, skillsData: Data });
        setState({ abilities, Activity, links: test, personalData });
    };
    return { abilitiesSubmit, handleChange, activitySubmit, linksSubmit };
}
