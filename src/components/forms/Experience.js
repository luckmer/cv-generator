import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { StoreContext } from "../../store/index";

const initialState = {
    wE: [],
    en: [],
    lk: [],
    ce: [],
    pp: "",
};

function Experience() {
    const [state, setState] = useState(initialState);
    const [text, setText] = useState({ WT: "", ED: "", LT: "", CT: "" });

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
        e.preventDefault();
        const newCv = { id: nanoid(), data: WT };
        const test = wE.concat(newCv);
        setEditData({ experienceData: Data, basicData, skillsData });
        setState({ wE: test, en, lk, ce, pp });
    };

    const handleEduSubmit = (e) => {
        e.preventDefault();
        const newCv = { id: nanoid(), data: ED };
        const test = en.concat(newCv);
        setEditData({ experienceData: Data, basicData, skillsData });
        setState({ wE, en: test, lk, ce, pp });
    };

    const handleLangSubmit = (e) => {
        e.preventDefault();
        const newCv = { id: nanoid(), data: LT };
        const test = lk.concat(newCv);
        setEditData({ experienceData: Data, basicData, skillsData });
        setState({ wE, en, lk: test, ce, pp });
    };

    const handleCertificateSubmit = (e) => {
        e.preventDefault();
        const newCv = { id: nanoid(), data: CT };
        const test = ce.concat(newCv);
        setEditData({ experienceData: Data, basicData, skillsData });
        setState({ wE, en, lk, ce: test, pp });
    };
    return (
        <div>
            <form onSubmit={handleWorkSubmit}>
                <input
                    placeholder=" work experience"
                    name="wE"
                    value={text.WT}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleEduSubmit}>
                <input
                    placeholder="en"
                    value={text.ED}
                    name="ED"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleLangSubmit}>
                <input
                    placeholder="lk"
                    value={text.LT}
                    name="LT"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleCertificateSubmit}>
                <input
                    placeholder="ce"
                    value={text.CT}
                    name="CT"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                <input name="pp" onChange={handleChange} placeholder=" data" />
            </div>
        </div>
    );
}

export default Experience;
