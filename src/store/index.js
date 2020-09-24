import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export default ({ children }) => {
    const [table, setTable] = useState({
        data: [],
    });

    const store = {
        DATA: [table, setTable],
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
