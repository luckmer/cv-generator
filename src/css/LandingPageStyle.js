import styled from "styled-components";
import colors from "./colors"
export const Container = styled.div`
    padding: 7vh 0 0 0;
`;
export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 10vw 10px 10vw;
    opacity: ${({ controlOpen }) => (controlOpen ? 0 : 1)};
    @media screen and (max-width: 1000px) {
        width: calc(100vw - 15px);
    }
`;

export const CreateContext = styled.div`
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    button {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
        font-weight: bold;
        cursor: pointer;
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
        border: none;
        border-radius: 5px;
    }
    input,
    select {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
        border: none;
        cursor: pointer;
        border-radius: 5px;
        font-weight: bold;
        padding: 0.75em 1em;
    }
    select,
    input {
        margin: 0 20px 0 0;
    }
    @media screen and (max-width: 940px) {
        flex-direction:column;
        input,select,button{
            margin: 0 20px 0 20px;
            justify-content:center;
            align-items:center;
            width: calc(100vw - 40px);
        }
    }
`;
