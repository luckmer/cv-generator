import styled from "styled-components";

export const Container = styled.div`
    padding: 7vh 0 0 0;
`;

export const CreateContext = styled.div`
    padding: 20px 0 20px 0;

    display: flex;
    justify-content: space-around;
    width: 100%;
    border-bottom: 1px solid #d8d8d8;
    align-items: center;
    button {
        background-color: #212529;
        color: #ffffff;
        font-weight: bold;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 5px;
    }
    input,
    select {
        background-color: #3f66f6;
        color: #ffffff;
        border: none;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
    }
    select,
    input {
        margin: 0 20px 0 0;
    }
    div {
    }
`;
