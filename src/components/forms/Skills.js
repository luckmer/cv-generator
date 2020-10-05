import React from "react";
import { useForm } from "react-hook-form";
import { OpenHook, SkillsUpdate } from "../../imports/Index";
import { ExperienceContext, FormContext, Form } from "../../css/FormDataStyles";

function Skills({ onClick }) {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = OpenHook();
    const {
        abilitiesSubmit,
        handleChange,
        activitySubmit,
        linksSubmit,
        text,
    } = SkillsUpdate();

    return (
        <ExperienceContext>
            <FormContext>
                <Form onSubmit={handleSubmit(abilitiesSubmit)}>
                    <label>abilities</label>
                    <div>
                        <input
                            ref={register({ pattern: /\w/i })}
                            placeholder="abilities"
                            name="as"
                            value={text.as}
                            onChange={handleChange}
                        />
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </FormContext>

            <FormContext>
                <Form onSubmit={handleSubmit(activitySubmit)}>
                    <label>Activity</label>
                    <div>
                        <button onClick={() => setOpen({ t: !open.t })}>
                            Submit Form
                        </button>
                    </div>
                    {open.t ? (
                        <div>
                            <input
                                ref={register({ pattern: /\w/i })}
                                placeholder=" Activity"
                                name="ay"
                                value={text.ay}
                                onChange={handleChange}
                            />
                            <input placeholder="location update" />
                            <input
                                type="date"
                                placeholder="start date update"
                            />
                            <input type="date" placeholder="end date update" />
                            <input placeholder="description" />
                            <button type="submit">Submit</button>
                        </div>
                    ) : (
                        ""
                    )}
                </Form>
            </FormContext>

            <FormContext>
                <Form onSubmit={handleSubmit(linksSubmit)}>
                    <label>Links</label>
                    <div>
                        <button onClick={() => setOpen({ th: !open.th })}>
                            Submit Form
                        </button>
                    </div>
                    {open.th ? (
                        <div>
                            <input
                                ref={register({
                                    pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/i,
                                })}
                                placeholder=" Links"
                                name="ls"
                                value={text.ls}
                                onChange={handleChange}
                            />
                            <input placeholder="description" />
                            <small>example www.name.com</small>
                            <br />
                            <button type="submit">Submit</button>
                        </div>
                    ) : (
                        ""
                    )}
                </Form>
            </FormContext>

            <FormContext>
                <Form>
                    <div>
                        <label>Personal Data</label>
                        <input
                            ref={register({
                                pattern: /(0[1-9]|1[0-9]|2[0-9]|3[0-1])/i,
                            })}
                            placeholder="personal Data"
                            name="pd"
                            value={text.pd}
                            onChange={handleChange}
                        />
                    </div>
                </Form>
            </FormContext>

            <FormContext>
                <button onClick={onClick}>Submit</button>
            </FormContext>
        </ExperienceContext>
    );
}

export default Skills;
