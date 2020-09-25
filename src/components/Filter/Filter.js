import React from "react";

function Filter({ setOpen, open }) {
    return (
        <>
            <div>
                <input />
                <select>
                    <option>option</option>
                    <option>option</option>
                    <option>option</option>
                    <option>option</option>
                </select>
                <select>
                    <option> option</option>
                    <option> option</option>
                    <option> option</option>
                    <option> option</option>
                </select>
            </div>
            <div>
                <button onClick={() => setOpen(!open)}>Create</button>
            </div>
        </>
    );
}

export default Filter;
