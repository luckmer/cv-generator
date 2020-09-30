import { nanoid } from "nanoid";
import React, { useState } from "react";

const initialState = {
    wE: [],
    en: [],
    lk: [],
    ce: [],
    pp: "",
};

function Experience() {
    const [state, setState] = useState(initialState);
    const [text, setText] = useState({
        id: nanoid(),
        WT: "",
        ED: "",
        LT: "",
        CT: "",
    });
    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
    };
    console.log(state);
    const { LT, WT, ED, CT } = text;
    const { wE, en, lk, ce, pp } = state;

    const handleWorkSubmit = (e) => {
        e.preventDefault();
        const newCv = { id: nanoid(), data: WT };
        const test = wE.concat(newCv);
        setState({ wE: test, en, lk, ce, pp });
    };

    const handleEduSubmit = (e) => {
        e.preventDefault();
        const newCv = { id: nanoid(), data: ED };
        const test = en.concat(newCv);
        setState({ wE, en: test, lk, ce, pp });
    };

    const handleLangSubmit = (e) => {
        e.preventDefault();
        const newCv = { id: nanoid(), data: LT };
        const test = lk.concat(newCv);
        setState({ wE, en, lk: test, ce, pp });
    };

    const handleCertificateSubmit = (e) => {
        e.preventDefault();
        const { CT } = text;
        const newCv = { id: nanoid(), data: CT };
        const test = ce.concat(newCv);
        setState({ wE, en, lk, ce: test, pp });
    };
    return (
        <div>
            <form onSubmit={handleWorkSubmit}>
                <input
                    placeholder=" work experience"
                    name="wE"
                    value={text.WT}
                    name="WT"
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
        </div>
    );
}

export default Experience;
