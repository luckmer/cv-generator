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
        if (text.wE) {
            const newCv = { id: nanoid(), data: WT };
            const test = wE.concat(newCv);
            setEditData({ experienceData: Data, basicData, skillsData });
            setState({ wE: test, en, lk, ce, pp });
            setText({ wE: "" });
        }
    };

    const handleEduSubmit = (e) => {
        if (text.ED) {
            const newCv = { id: nanoid(), data: ED };
            const test = en.concat(newCv);
            setEditData({ experienceData: Data, basicData, skillsData });
            setState({ wE, en: test, lk, ce, pp });
            setText({ ED: "" });
        }
    };

    const handleLangSubmit = (e) => {
        if (text.LT) {
            const newCv = { id: nanoid(), data: LT };
            const test = lk.concat(newCv);
            setEditData({ experienceData: Data, basicData, skillsData });
            setState({ wE, en, lk: test, ce, pp });
            setText({ LT: "" });
        }
    };

    const handleCertificateSubmit = (e) => {
        if (text.CT) {
            const newCv = { id: nanoid(), data: CT };
            const test = ce.concat(newCv);
            setEditData({ experienceData: Data, basicData, skillsData });
            setState({ wE, en, lk, ce: test, pp });
            setText({ CT: "" });
        }
    };
    return {
        handleWorkSubmit,
        handleEduSubmit,
        handleLangSubmit,
        handleCertificateSubmit,
        handleChange,
        text,
        state,
    };
}
