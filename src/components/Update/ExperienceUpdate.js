

import { useState, useContext } from "react";
import { StoreContext } from "../../store";

import { nanoid } from "nanoid";

const initialState = {
    wE: [],
    en: [],
    lk: [],
    ce: [],
    pp: "",
};

export default function ExperienceUpdate() {
    const [state, setState] = useState(initialState);
    const { DATAUPDATE: [editData, setEditData] ,} = useContext(StoreContext);
    const [text,setText] =useState({
        wE:"", ED:"",LT:"" , CT:"" , pp:"",
        company:"",location:"",startDate:"",endDate:"",
        school:"",Specialisation:"",eduStart:"",eduEnd:"",
        level:"",certStart:"",promoter:""
    })

    const handleChange=(e)=>setText({...text, [e.target.name] :e.target.value})
    const { basicData, skillsData } = editData;

    const {
        ED , LT , CT ,company, location, startDate , endDate,
        school, Specialisation,eduStart ,eduEnd,level,certStart,
        promoter,
    }= text
    const { wE, en, lk, ce, pp } = state;
    
    const Data = basicData.concat(state);
    const handleWorkSubmit = () => {
        if (text.wE) {
            const newCv = { id: nanoid(),  data: text.wE, company ,location, startDate,endDate };
            const test = wE.concat(newCv);
            setEditData({basicData, experienceData: Data,  skillsData });
            setState({ wE: test, en, lk, ce, pp });
            setText({ wE: "",company:"",location:"",startDate:"",endDate:"", });
        }
    };

    const handleEduSubmit = () => {
        if (text.ED) {
            const newCv = { id: nanoid(), data: ED, skillsData,school,Specialisation,eduStart ,eduEnd };
            const test = en.concat(newCv);
            setEditData({basicData, experienceData: Data });
            setState({ wE, en: test, lk, ce, pp });
            setText({ ED: "",skillsData :"" , school :"", Specialisation:"" , eduStart:"" , eduEnd:""  });
        }
    };

    const handleLangSubmit = () => {
        if (text.LT) {
            const newCv = { id: nanoid(), data: LT,level };
            const test = lk.concat(newCv);
            setEditData({ basicData, experienceData: Data,  skillsData });
            setState({ wE, en, lk: test, ce, pp });
            setText({ LT: "",level:"" });
        }
    };

    const handleCertificateSubmit = () => {
        if (text.CT) {
            const newCv = { id: nanoid(), data: CT,certStart,promoter };
            const test = ce.concat(newCv);
            setEditData({ basicData,experienceData: Data,  skillsData });
            setState({ wE, en, lk, ce: test, pp });
            setText({ CT: "",certStart:"" ,promoter:"" });
        }
    };
    return {
        text,
        handleChange,
        handleLangSubmit,
        handleWorkSubmit,
        handleEduSubmit,
        handleCertificateSubmit,
        state,
    };
}
