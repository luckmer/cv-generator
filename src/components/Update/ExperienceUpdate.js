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
    const [text, setText] = useState({
        WT: "",
        ED: "",
        LT: "",
        CT: "",
        wE: "",
    });

    const {
        DATAUPDATE: [editData, setEditData],
    } = useContext(StoreContext);

    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
    };
    const { basicData, skillsData } = editData;
    const { LT, WT, ED, CT } = text;
    const { wE, en, lk, ce, pp } = state;
    const Data = basicData.concat(state);

    const handleWorkSubmit = (e) => {
        const newCv = { id: nanoid(), data: WT };
        const test = wE.concat(newCv);
        setEditData({ experienceData: Data, basicData, skillsData });
        setState({ wE: test, en, lk, ce, pp });
    };

    const handleEduSubmit = (e) => {
        const newCv = { id: nanoid(), data: ED };
        const test = en.concat(newCv);
        setEditData({ experienceData: Data, basicData, skillsData });
        setState({ wE, en: test, lk, ce, pp });
    };

    const handleLangSubmit = (e) => {
        const newCv = { id: nanoid(), data: LT };
        const test = lk.concat(newCv);
        setEditData({ experienceData: Data, basicData, skillsData });
        setState({ wE, en, lk: test, ce, pp });
    };

    const handleCertificateSubmit = (e) => {
        const newCv = { id: nanoid(), data: CT };
        const test = ce.concat(newCv);
        setEditData({ experienceData: Data, basicData, skillsData });
        setState({ wE, en, lk, ce: test, pp });
    };
    return {
        handleWorkSubmit,
        handleEduSubmit,
        handleLangSubmit,
        handleCertificateSubmit,
        handleChange,
        text,
    };
}
