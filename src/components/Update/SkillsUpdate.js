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

    const { basicData,skillsData, experienceData } = editData;
    const { abilities, Activity, links, personalData } = state;
    const Data = skillsData.concat(state);


    //test
    const [text,setText]= useState({
        as:"",ay:"",ls:"",pd:"",name:"",location:"",startDate:"",endDate:"",
        description:"",
    })
    const {as,ay,ls,name,location,startDate,endDate,description }= text
    const handleChange = e => setText({...text , [e.target.name]:e.target.value})

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("state"));
        if (store) setState(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("stateData", JSON.stringify(state));
    }, [state]);

    const abilitiesSubmit = () => {
        if (text.as) {
            const newData = { id: nanoid(), data: as };
            const test = abilities.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities: test, Activity, links, personalData });
        }
        setText({  as:"",ay:"",ls:"",pd:"",name:"",location:"",startDate:"",endDate:"",
        description:""})
    };
    const activitySubmit = () => {
        if (text.ay) {
            const newData = { id: nanoid(), data: ay, name , location , startDate , endDate };
            const test = Activity.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities, Activity: test, links, personalData });
        }
        setText({  as:"",ay:"",ls:"",pd:"",name:"",location:"",startDate:"",endDate:"",
        description:""})
    };

    const linksSubmit = () => {
        if (text.ls) {
            const newData = { id: nanoid(), data: ls,description  };
            const test = links.concat(newData);
            setEditData({ experienceData, basicData, skillsData: Data });
            setState({ abilities, Activity, links: test, personalData });
            setText({  as:"",ay:"",ls:"",pd:"",name:"",location:"",startDate:"",endDate:"",
            description:""})
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
