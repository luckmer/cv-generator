import styled from "styled-components";

export const TableDesign = styled.table`
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 6px;
    margin: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    text-algin: center;
    width: 100%;
    border-bottom: 1px solid #d8d8d8;
    p {
        width: 100%;
    }
    th,
    td {
        width: 100vw;
        padding: 20px;
        background-color: #ffffff;
        color: #212529;
    }
    button {
        background-color: #e8474c;
        color: white;
        font-weight: bold;
        border-radius: 20px;
        margin: 0 10px 0 10px;
        padding: 5px 10px 5px 10px;
        border: none;
    }
`;
