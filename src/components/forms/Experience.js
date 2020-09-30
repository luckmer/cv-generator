import { nanoid } from "nanoid";
import React, { useState } from "react";

const initialState = {
    workExperience: [],
    education: [],
    languageKnowledge: [],
    certificatesEtc: [],
    professionalProfile: "",
};

function Experience() {
    const [state, setState] = useState(initialState);
    const [text, setText] = useState({
        id: nanoid(),
        workText: "",
        eduText: "",
        languageText: "",
        certificateText: "",
    });
    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
    };
    console.log(state);
    const { languageText, workText, eduText, certificateText } = text;
    const {
        workExperience,
        education,
        languageKnowledge,
        certificatesEtc,
        professionalProfile,
    } = state;

    const handleWorkSubmit = (e) => {
        e.preventDefault();
        const newCv = {
            id: nanoid(),
            data: workText,
        };
        const test = workExperience.concat(newCv);
        setState({
            workExperience: test,
            education,
            languageKnowledge,
            certificatesEtc,
            professionalProfile,
        });
    };

    const handleEduSubmit = (e) => {
        e.preventDefault();
        const newCv = {
            id: nanoid(),
            data: eduText,
        };
        const test = education.concat(newCv);
        setState({
            workExperience,
            education: test,
            languageKnowledge,
            certificatesEtc,
            professionalProfile,
        });
    };
    const handleLangSubmit = (e) => {
        e.preventDefault();

        const newCv = {
            id: nanoid(),
            data: languageText,
        };
        const test = languageKnowledge.concat(newCv);
        setState({
            workExperience,
            education,
            languageKnowledge: test,
            certificatesEtc,
            professionalProfile,
        });
    };

    const handleCertificateSubmit = (e) => {
        e.preventDefault();
        const { certificateText } = text;

        const newCv = {
            id: nanoid(),
            data: certificateText,
        };
        const test = certificatesEtc.concat(newCv);
        setState({
            workExperience,
            education,
            languageKnowledge,
            certificatesEtc: test,
            professionalProfile,
        });
    };
    return (
        <div>
            <form onSubmit={handleWorkSubmit}>
                <input
                    placeholder=" work experience"
                    name="workExperience"
                    value={text.workText}
                    name="workText"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleEduSubmit}>
                <input
                    placeholder="education"
                    value={text.eduText}
                    name="eduText"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleLangSubmit}>
                <input
                    placeholder="languageKnowledge"
                    value={text.languageText}
                    name="languageText"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleCertificateSubmit}>
                <input
                    placeholder="certificatesEtc"
                    value={text.certificateText}
                    name="certificateText"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Experience;
