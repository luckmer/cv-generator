import React from "react";
import ExperienceUpdate from "../Update/ExperienceUpdate";

function Experience() {
    const {
        handleWorkSubmit,
        handleEduSubmit,
        handleLangSubmit,
        handleCertificateSubmit,
        handleChange,
        text,
    } = ExperienceUpdate();
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
