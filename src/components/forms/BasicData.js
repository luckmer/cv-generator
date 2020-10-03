import React from "react";

import BasicDataUpdate from "../Update/BasicDataUpdate";

function BasicData() {
    const { handleDataSubmit, handleDataChange, state } = BasicDataUpdate();
    return (
        <form onSubmit={handleDataSubmit}>
            <input name="name" value={state.name} onChange={handleDataChange} />
            <input
                name="surname"
                value={state.surname}
                onChange={handleDataChange}
            />
            <input
                type="text"
                name="dataOfBirth"
                value={state.dataOfBirth}
                onChange={handleDataChange}
            />
            <input
                name="country"
                value={state.country}
                onChange={handleDataChange}
            />
            <input
                name="livingPlace"
                value={state.livingPlace}
                onChange={handleDataChange}
            />
            <input
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleDataChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BasicData;
