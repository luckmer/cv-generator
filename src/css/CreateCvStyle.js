import styled from "styled-components";

export const Container = styled.div`
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
`;

export const Form = styled.form`
    z-index: 200;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        margin: 0 20px 0 20px;
        background-color: #212529;
        color: #ffffff;
        font-weight: bold;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 5px;
    }
    button {
        background-color: #212529;
        color: #ffffff;
        font-weight: bold;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 5px;
        margin: 0 20px 0 20px;
    }
`;

export const Black = styled.div`
    z-index: -1;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
`;
