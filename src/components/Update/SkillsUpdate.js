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

    const [text, setText] = useState({ as: ""});
    const { basicData, experienceData } = editData;
    const { abilities, Activity, links, personalData } = state;
    const Data = basicData.concat(state);

    
    const [activeState, setActiveState] = useState({ay:""})
    const [linkState ,setLinkState] = useState({ls:""})
    const [personData ,setPersonData] = useState({pd:""})

    //change
    const handleChange = (e) => setText({ ...text, [e.target.name]: e.target.value });
    const handleActiveChange = e => {
        setActiveState({...activeState,[e.target.name]:e.target.value})
    }
    const handleLinkChange =e=> setLinkState({...linkState,[e.target.name]:e.target.value})
    const handlePersonChange =e=> setPersonData({...personData ,[e.target.name]:e.target.value})

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("state"));
        if (store) setState(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("stateData", JSON.stringify(state));
    }, [state]);


    const abilitiesSubmit = () => {
        if (text) {
            const newData = { id: nanoid(), data: text };
            const test = abilities.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities: test, Activity, links, personalData });
        }
        setText({ as: "" });
    };

    const activitySubmit = () => {
        if (activeState) {
            const newData = { id: nanoid(), data: activeState };
            const test = Activity.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities, Activity: test, links, personalData });
        }
        setActiveState({ ay: "" });
    };

    const linksSubmit = () => {
        if (linkState) {
            const newData = { id: nanoid(), data: linkState };
            const test = links.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities, Activity, links: test, personalData });
        }
    };
    return {
        handlePersonChange,
        personData,
        handleLinkChange,
        linkState,
        activeState,
        handleActiveChange,
        abilitiesSubmit,
        handleChange,
        activitySubmit,
        linksSubmit,
        text,
        state,
    };
}
