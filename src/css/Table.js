import styled from "styled-components";

export const TableDesign = styled.table`
    display: flex;
    justify-content: center;
    text-algin: center;
    width: 100%;
    border-bottom: 1px solid #d8d8d8;

    th,
    td {
        width: 100vw;
        padding: 20px;
        background-color: #ffffff;
        color: #212529;
    }
    button {
        background-color: #d8d8d8;
        color: #212529;
        font-weight: bold;
        border-radius: 20px;
        margin: 0 10px 0 10px;
        padding: 5px 10px 5px 10px;
        border: none;
        border-radius: 5px;
    }
`;
