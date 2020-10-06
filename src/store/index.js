import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export default ({ children }) => {
    const [table, setTable] = useState({
        data: [],
    });
    const { data } = table;
    console.log(data);
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

    const editTask = (id, basicData, experienceData, skillsData) => {
        const edited = data.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    title: task.title,
                    BasicData: basicData,
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
    }, []);

    useEffect(() => {
        localStorage.setItem("TableData", JSON.stringify(table));
        localStorage.setItem("propData", JSON.stringify(prop));
    }, [table, prop]);

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
