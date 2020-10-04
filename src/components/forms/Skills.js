import React from "react";
import SkillsUpdate from "../Update/SkillsUpdate";
import { useForm } from "react-hook-form";

function Skills() {
    const { register, handleSubmit, errors } = useForm();

    const {
        abilitiesSubmit,
        handleChange,
        activitySubmit,
        linksSubmit,
    } = SkillsUpdate();

    return (
        <div>
            <form onSubmit={handleSubmit(abilitiesSubmit)}>
                <input
                    ref={register({ pattern: /\w/i, required: true })}
                    placeholder=" skill experience"
                    name="as"
                    onChange={handleChange}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleSubmit(activitySubmit)}>
                <input
                    ref={register({ pattern: /\w/i, required: true })}
                    placeholder=" skill experience"
                    name="ay"
                    onChange={handleChange}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleSubmit(linksSubmit)}>
                <input
                    ref={register({
                        pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/i,
                        required: true,
                    })}
                    placeholder=" skill experience"
                    name="ls"
                    onChange={handleChange}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit">Submit</button>
            </form>
            <div>
                <input
                    ref={register({
                        pattern: /(0[1-9]|1[0-9]|2[0-9]|3[0-1])/i,
                        required: true,
                    })}
                    placeholder="personal Data"
                    name="pd"
                    onChange={handleChange}
                />
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
        </div>
    );
}

export default Skills;
