import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store/index";
import UpdateBasicData from "../Update/UpdateBasicData";

const InitialBasicData = {
    basicData: {
        id: "",
        firstName: "",
        lastName: "",
        country: "",
        theTown: "",
        ContactNumber: "",
        email: "",
    },
};

function BasicData({ match }) {
    const [state, setState] = useState(InitialBasicData);
    const {
        DATA: [table],
    } = useContext(StoreContext);
    const [detailData, setDetailData] = useState({
        DetailsData: [],
    });

    useEffect(() => {
        let projectId = table.data.filter((el) => el.id === match.params.id);
        setDetailData({ DetailsData: projectId });
    }, [match.params.id, table.data, setDetailData]);
    const { basicData } = state;

    console.log(basicData);
    return (
        <div>
            {detailData.DetailsData.map(({ id }) => (
                <UpdateBasicData
                    id={id}
                    key={id}
                    state={state}
                    setState={setState}
                    InitialBasicData={InitialBasicData}
                />
            ))}
        </div>
    );
}

export default BasicData;
