import React from "react";
import ExperienceUpdate from "../Update/ExperienceUpdate";
import { useForm } from "react-hook-form";

function Experience({ onClick }) {
    const { register, handleSubmit, errors } = useForm();

    const {
        handleWorkSubmit,
        handleEduSubmit,
        handleLangSubmit,
        handleCertificateSubmit,
        handleChange,
    } = ExperienceUpdate();

    return (
        <div>
            <form onSubmit={handleSubmit(handleWorkSubmit)}>
                <input
                    ref={register({ pattern: /\w/i, required: true })}
                    placeholder="work experience "
                    name="wE"
                    onChange={handleChange}
                />
                {errors.wE && <span>This field is required</span>}
                <button type="submit">Submit</button>
            </form>

            <form onSubmit={handleSubmit(handleEduSubmit)}>
                <input
                    ref={register({ pattern: /\w/i, required: true })}
                    placeholder="Education "
                    name="ED"
                    onChange={handleChange}
                />
                {errors.ED && <span>This field is required</span>}
                <button type="submit">Submit</button>
            </form>

            <form onSubmit={handleSubmit(handleLangSubmit)}>
                <input
                    ref={register({ pattern: /\w/i, required: true })}
                    placeholder="language knowledge "
                    name="LT"
                    onChange={handleChange}
                />
                {errors.LT && <span>This field is required</span>}
                <button type="submit">Submit</button>
            </form>

            <form onSubmit={handleSubmit(handleCertificateSubmit)}>
                <input
                    ref={register({ pattern: /\w/i, required: true })}
                    placeholder="certificates"
                    name="CT"
                    onChange={handleChange}
                />
                {errors.CT && <span>This field is required</span>}
                <button type="submit">Submit</button>
            </form>

            <div>
                <input
                    name="pp"
                    onChange={handleChange}
                    placeholder=" data"
                    ref={register({
                        pattern: /(0[1-9]|1[0-9]|2[0-9]|3[0-1])/i,
                        required: true,
                    })}
                />
                {errors.pp && <span>This field is required</span>}
            </div>
        </div>
    );
}

export default Experience;
