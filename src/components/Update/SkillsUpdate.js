import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store";

import { nanoid } from "nanoid";

const initialState = {
    abilities: [],
    Activity: [],
    links: [],
    Interests: "",
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

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("state"));
        if (store) setState(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("stateData", JSON.stringify(state));
    }, [state]);

    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
    };

    const abilitiesSubmit = () => {
        if (as) {
            const newData = { id: nanoid(), data: as };
            const test = abilities.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities: test, Activity, links, personalData });
        }
        setText({ as: "" });
    };

    const activitySubmit = () => {
        if (ay) {
            const newData = { id: nanoid(), data: ay };
            const test = Activity.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities, Activity: test, links, personalData });
        }
        setText({ ay: "" });
    };

    const linksSubmit = () => {
        if (ls) {
            const newData = { id: nanoid(), data: ls };
            const test = links.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities, Activity, links: test, personalData });
        }
    };
    return {
        abilitiesSubmit,
        handleChange,
        activitySubmit,
        linksSubmit,
        text,
        state,
    };
}
