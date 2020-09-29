import React, { useContext } from "react";
import { StoreContext } from "../store/index";
import styled from "styled-components";
import DetailFilter from "../hooks/DetailFilter";
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

    DetailFilter(table, match, setDetailData);

    const { DetailsData } = detailData;
    return (
        <Container>
            {DetailsData.map(({ title, id }) => (
                <div key={id}>{title}</div>
            ))}
        </Container>
    );
}

export default Details;
