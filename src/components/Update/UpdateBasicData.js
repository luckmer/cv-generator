import React, { useState, useEffect } from "react";

function UpdateBasicData({ id, state, setState }) {
    const handleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });
    const [test, setTest] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContext = {
            id: id,
        };
        const nextTest = test.concat(newContext);
        setTest(nextTest);
    };

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("data"));
        if (store) setTest(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(test));
    }, [test]);

    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="firstName"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                />
                <input
                    name="lastName"
                    placeholder="lastName"
                    type="text"
                    onChange={handleChange}
                />
                <input
                    name="Country"
                    placeholder="Country"
                    type="country"
                    onChange={handleChange}
                />
                <input
                    name="theTown"
                    placeholder="theTown"
                    type="text"
                    onChange={handleChange}
                />
                <input
                    name="ContactNumber"
                    placeholder="ContactNumber"
                    type="number"
                    onChange={handleChange}
                />
                <input
                    name="email"
                    placeholder="email"
                    type="email"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {test.map(({ id }) => (
                <div>{id}</div>
            ))}
        </div>
    );
}

export default UpdateBasicData;
