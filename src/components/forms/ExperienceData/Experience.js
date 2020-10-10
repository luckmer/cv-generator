import React from "react";
import { ExperienceContext, FormContext, Form } from "../../../css/FormDataStyles";
import { OpenHook, ExperienceUpdate } from "../../../imports/Index";
import { useForm } from "react-hook-form";
function Experience({ onClick }) {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = OpenHook();
    
    const {
        handleWorkSubmit,
        handleEduSubmit,
        handleLangSubmit,
        handleCertificateSubmit,
        text,
        handleChange
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
                                placeholder="work experience "
                                name="wE"
                                value={text.wE}
                                onChange={handleChange}
                            />
                            <input 
                                name="company"    
                                placeholder ="company" 
                                value={text.company}
                                onChange={handleChange}
                                />
                            <input 
                                name="location" 
                                placeholder="location"
                                value={text.location}
                                onChange={handleChange} 
                            />
                            <input 
                                placeholder ="start date"
                                name ="startDate"
                                value={text.startDate}
                                onChange={handleChange} 
                            />
                            <input 
                            placeholder ="end date"
                            name ="endDate"
                            value={text.endDate}
                            onChange={handleChange} 
                            />
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
                                placeholder="Education"
                                name="ED"
                                value={text.ED}
                                onChange={handleChange}
                            />
                            <input 
                                ref={register({ pattern: /\w/i })}
                                name ="school"
                                placeholder ="name of the school"
                                value={text.school}
                                onChange={handleChange}
                            />
                            <input 
                                ref={register({ pattern: /\w/i })}
                                name="Specialisation"
                                placeholder="Specialisation"
                                value={text.Specialisation}
                                onChange={handleChange}
                            />
                            <input 
                                ref={register({ pattern: /\w/i })}
                                name ="eduStart"
                                placeholder ="start date"
                                value={text.eduStart}
                                onChange={handleChange}
                                />
                            <input 
                                ref={register({ pattern: /\w/i })}
                                name ="eduEnd"
                                placeholder ="end date"
                                value={text.eduEnd}
                                onChange={handleChange}
                                />
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
                            <input
                                ref={register({ pattern: /\w/i })}
                                placeholder="language level "
                                name="level"
                                value={text.level}
                                onChange={handleChange}
                            />
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
                                placeholder="name"
                                name="CT"
                                value={text.CT}
                                onChange={handleChange}
                            />
                            <input 
                                name ="promoter"
                                placeholder ="The organiser"
                                value={text.promoter}
                                onChange={handleChange} 
                            />
                            <input 
                                placeholder ="start date "
                                name ="certStart"
                                value={text.certStart}
                                onChange={handleChange} 
                                />
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
                            onChange ={handleChange}
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
