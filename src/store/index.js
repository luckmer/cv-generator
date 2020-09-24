import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export default ({ children }) => {
    const [table, setTable] = useState({
        data: [],
    });
    const [detailData, setDetailData] = useState({
        DetailsData: [],
    });

    const clearTableData = () => {
        const clearState = table.data;
        clearState.splice(clearState, 1);
        setTable({ data: clearState });
    };
    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("TableData"));
        if (store) setTable(store);
    }, []);

    useEffect(() => {
        localStorage.setItem("TableData", JSON.stringify(table));
    }, [table]);

    const store = {
        clearTableData,
        DETAILS: [detailData, setDetailData],
        DATA: [table, setTable],
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
