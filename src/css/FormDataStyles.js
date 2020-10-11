import styled from "styled-components";
import colors from "./colors"
export const DataContext = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.lightWhite};
    color: ${colors.lightDarkBlue};
    margin: 5px 40px 5px 40px;
    padding: 10px 0 10px 0;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 6px;
`;

export const ExperienceContext = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px auto;
    width: 800px;
    color: black;
    padding: 0 0 5em 0;
`;

export const ContainerContext = styled.div`
    padding: 15vh 0 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px auto;
    width: 800px;
    color: ${colors.black};
`;

export const FormContext = styled.div`
    width: calc(100% - 10em);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 6px;
    button {
        border: none;
        cursor: pointer;
        background-color: ${colors.lightTomato};
        color: ${colors.white};
        font-weight: bold;
        padding: 0.75em 1em;
        &:disabled {
            border: 1px solid ${colors.smallGrey};
            background-color: ${colors.lessWhite};
            color: ${colors.lightGrey};
        }
    }
`;

export const Form = styled.form`
    margin: 20px 40px 20px 40px;
    padding: 10px 0 10px 0;
    input {
        width: 100%;
        height: 100%;
        border-radius: 7px;
        padding: 1em;
        border: none;
        background: ${colors.lightWhite};
        color: ${colors.lightDarkBlue};
    }

    label {
        font-weight: bold;
        color: black;
        padding: 10px 0 10px 0;
        font-size: 1.125em;
        line-height: 2.25;
    }
    span {
        color: red;
    }
`;
