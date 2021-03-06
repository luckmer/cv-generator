import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export default ({ children }) => {
    const [table, setTable] = useState({
        data: [],
    });
    const { data } = table;
    
    const [editData, setEditData] = useState({
        basicData: [],
        experienceData: [],
        skillsData: [],
    });
    const [detailData, setDetailData] = useState({
        DetailsData: [],
    });
    const [updated, setUpdated] = useState({
        UpdatedData: [],
    });
    const [prop, setProp] = useState({
        PropsData: [],
    });
    const ID = prop.PropsData;
    const clearTableData = () => {
        const clearState = table.data;
        clearState.splice(clearState, 1);
        setTable({ data: clearState });
    };
    const editTask = (id) => {
        const {experienceData , skillsData} = editData
        
        const edited = data.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    experienceData: experienceData,
                    SkillData: skillsData,
                };
            }
            return task;
        });
        setTable({ data: edited });
    };


    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("TableData"));
        if (store) setTable(store);
        const data = JSON.parse(localStorage.getItem("propData"));
        if (data) setProp(data);
        const editData = JSON.parse(localStorage.getItem("ediData"));
        if (editData) setEditData(editData);
    }, []);

    useEffect(() => {
        localStorage.setItem("TableData", JSON.stringify(table));
        localStorage.setItem("propData", JSON.stringify(prop));
        localStorage.setItem("ediData", JSON.stringify(editData))
    }, [table, prop,editData]);

    const store = {
        clearTableData,
        DETAILS: [detailData, setDetailData],
        DATA: [table, setTable],
        UPDATED: [updated, setUpdated],
        DATAUPDATE: [editData, setEditData],
        PROPSDATA: [prop, setProp],
        editTask,
        ID,
    };

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
