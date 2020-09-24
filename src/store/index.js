import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export default ({ children }) => {
    const [table, setTable] = useState({
        data: [],
    });
    const store = {
        DATA: [table, setTable],
    };
    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("TableData"));
        if (store) setTable(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("TableData", JSON.stringify(table));
    }, [table]);

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
