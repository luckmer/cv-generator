import React from "react";
import SkillsUpdate from "../Update/SkillsUpdate";

function Skills() {
    const {
        abilitiesSubmit,
        handleChange,
        activitySubmit,
        linksSubmit,
    } = SkillsUpdate();

    return (
        <div>
            <form onSubmit={abilitiesSubmit}>
                <input
                    placeholder=" skill experience"
                    name="as"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={activitySubmit}>
                <input
                    placeholder=" skill experience"
                    name="ay"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={linksSubmit}>
                <input
                    placeholder=" skill experience"
                    name="ls"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                <input
                    placeholder="personal Data"
                    name="pd"
                    onChange={handleChange}
                />
                <input
                    placeholder="personal Data"
                    name="pd"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default Skills;
