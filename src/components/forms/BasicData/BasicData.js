import React from "react";
import { useForm } from "react-hook-form";
import { ContainerContext, FormContext, Form } from "../../../css/FormDataStyles";
import { BasicDataUpdate } from "../../../imports/Index";

function BasicData() {
    const { register, handleSubmit, errors } = useForm();
    const { handleDataSubmit, handleDataChange } = BasicDataUpdate();

    return (
        <ContainerContext>
            <FormContext>
                <Form onSubmit={handleSubmit(handleDataSubmit)}>
                    <div>
                        <label>Name*</label>
                        <input
                            ref={register({
                                pattern: /^[^\s]+( [^\s]+)+$/i,
                                required: true,
                            })}
                            name="name"
                            type="text"
                            onChange={handleDataChange}
                        />
                        <small>first and last name</small>
                        <br />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div>
                        <label>Surname*</label>
                        <input
                            ref={register({
                                pattern: /^[^\s]+( [^\s]+)+$/i,
                                required: true,
                            })}
                            name="surname"
                            onChange={handleDataChange}
                        />
                        <small>first and last name</small>
                        <br />
                        {errors.surname && <span>This field is required</span>}
                    </div>

                    <div>
                        <label>Data of Birth*</label>
                        <input
                            ref={register({
                                pattern: /^(?:0[1-9]|[12]\d|3[01])([\/. ])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/g,
                                required: true,
                            })}
                            type="text"
                            name="dataOfBirth"
                            onChange={handleDataChange}
                        />
                        <small>DD/MM/YYYY</small>
                        <br />
                        {errors.dataOfBirth && (
                            <span>This field is required</span>
                        )}
                    </div>

                    <div>
                        <label>Country*</label>
                        <input
                            name="country"
                            onChange={handleDataChange}
                            ref={register({ required: true })}
                        />
                        <br />
                        {errors.country && <span>This field is required</span>}
                    </div>

                    <div>
                        <label>residence*</label>
                        <input
                            name="livingPlace"
                            onChange={handleDataChange}
                            ref={register({ required: true })}
                        />
                        <br />
                        {errors.livingPlace && (
                            <span>This field is required</span>
                        )}
                    </div>

                    <div>
                        <label>phone number*</label>
                        <input
                            ref={register({
                                required: true,
                            })}
                            placeholder="phone number "
                            name="phoneNumber"
                            type="number"
                            onChange={handleDataChange}
                        />
                        <small>### ### ####</small>
                        {errors.phoneNumber && (
                            <span>This field is required</span>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </FormContext>
        </ContainerContext>
    );
}

export default BasicData;
