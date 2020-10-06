import React from "react";
import { ExperienceContext, FormContext, Form } from "../../css/FormDataStyles";
import { OpenHook, ExperienceUpdate } from "../../imports/Index";
import { useForm } from "react-hook-form";
function Experience({ onClick }) {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = OpenHook();
    const {
        handleWorkSubmit,
        handleEduSubmit,
        handleLangSubmit,
        handleCertificateSubmit,
        handleChange,
        text,
    } = ExperienceUpdate();

    return (
        <ExperienceContext>
            <FormContext>
                <Form onSubmit={handleSubmit(handleWorkSubmit)}>
                    <label>Work Experience</label>
                    <div>
                        <button onClick={() => setOpen({ o: !open.o })}>
                            Submit Form
                        </button>
                    </div>

                    {open.o ? (
                        <div>
                            <input
                                ref={register({ pattern: /\w/i })}
                                placeholder="work experience "
                                name="wE"
                                value={text.wE}
                                onChange={handleChange}
                            />
                            {/* update */}
                            <input placeholder="firma update" />
                            <input placeholder="location update" />
                            <input
                                type="date"
                                placeholder="start data update"
                            />
                            <input type="date" placeholder="end data update" />
                            <input />
                            <button type="submit">Submit</button>
                        </div>
                    ) : (
                        ""
                    )}
                </Form>
            </FormContext>
            <FormContext>
                <Form onSubmit={handleSubmit(handleEduSubmit)}>
                    <label>Education</label>
                    <div>
                        <button onClick={() => setOpen({ t: !open.t })}>
                            Submit Form
                        </button>
                    </div>
                    {open.t ? (
                        <div>
                            <input
                                ref={register({ pattern: /\w/i })}
                                placeholder="Education "
                                name="ED"
                                value={text.ED}
                                onChange={handleChange}
                            />
                            <input placeholder="specjalizacja" />
                            <input
                                type="date"
                                placeholder="start date update"
                            />
                            <input type="date" placeholder="end date update" />
                            <input />
                            <button type="submit">Submit</button>
                        </div>
                    ) : (
                        ""
                    )}
                </Form>
            </FormContext>

            <FormContext>
                <Form onSubmit={handleSubmit(handleLangSubmit)}>
                    <label>Languages</label>
                    <div>
                        <button onClick={() => setOpen({ th: !open.th })}>
                            Submit Form
                        </button>
                    </div>
                    {open.th ? (
                        <div>
                            <input
                                ref={register({ pattern: /\w/i })}
                                placeholder="language knowledge "
                                name="LT"
                                value={text.LT}
                                onChange={handleChange}
                            />
                            <input placeholder="level  update" />
                            <button type="submit">Submit</button>
                        </div>
                    ) : (
                        ""
                    )}
                </Form>
            </FormContext>

            <FormContext>
                <Form onSubmit={handleSubmit(handleCertificateSubmit)}>
                    <label>certificates etc</label>
                    <div>
                        <button onClick={() => setOpen({ f: !open.f })}>
                            Submit Form
                        </button>
                    </div>
                    {open.f ? (
                        <div>
                            <input
                                ref={register({ pattern: /\w/i })}
                                placeholder="certificates"
                                name="CT"
                                value={text.CT}
                                onChange={handleChange}
                            />
                            <input placeholder="organizator update" />
                            <input
                                type="date"
                                placeholder="data uczestnictwa"
                            />
                            <input placeholder="description update" />
                            <button type="submit">Submit</button>
                        </div>
                    ) : (
                        " "
                    )}
                </Form>
            </FormContext>
            <FormContext>
                <Form>
                    <div>
                        <label>data</label>
                        <input
                            name="pp"
                            onChange={handleChange}
                            placeholder=" data"
                            ref={register({
                                pattern: /(0[1-9]|1[0-9]|2[0-9]|3[0-1])/i,
                            })}
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

export default Experience;
