import styled from "styled-components";
import colors from "./colors"
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
        background-color: ${colors.darkBlue};
        color: ${colors.white};
        font-weight: bold;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 5px;
    }
    button {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
        font-weight: bold;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 5px;
        margin: 0 20px 0 20px;
    }
    @media screen and (max-width: 517px) {
        div,input,button{
            margin: 10px 0 10px 0;
            width: calc(100vw - 40px);
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
    }
    
`;

export const Black = styled.div`
    z-index: -1;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.grey};
`;
