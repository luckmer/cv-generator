import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store/index";
import Context from "../components/Update/Context";
import styled from "styled-components";

const Container = styled.section`
    padding: 10vh 0 0 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Details({ match }) {
    const {
        DETAILS: [detailData, setDetailData],
        DATA: [table],
    } = useContext(StoreContext);
    const { DetailsData } = detailData;

    useEffect(() => {
        let projectId = table.data.filter((el) => el.id === match.params.id);
        setDetailData({ DetailsData: projectId });
    }, [match.params.id, table.data, setDetailData]);

    return (
        <Container>
            {DetailsData.map(({ title, id }) => (
                <div key={id}>{title}</div>
            ))}
        </Container>
    );
}

export default Details;
