import React, { useContext } from "react";
import { StoreContext } from "../../store/index";
import Skills from "../forms/Skills";
import Experience from "../forms/Experience";
import BasicData from "../forms/BasicData";

function Context() {
    const {
        UPDATED: [updated, setUpdated],
        DETAILS: [detailData, setDetailData],
        DATA: [table],
    } = useContext(StoreContext);
    const { DetailsData } = detailData;

    return (
        <div>
            <BasicData />
            <Skills />
        </div>
    );
}

export default Context;
