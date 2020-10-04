import styled from "styled-components";

export const ContainerContext = styled.div`
    padding: 15vh 0 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px auto;
    width: 800px;
    color: black;
`;

export const FormContext = styled.div`
    width: calc(100% - 10em);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 6px;
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
        background: rgb(229, 230, 230);
        color: rgb(44, 49, 58);
    }
    button {
        margin: 10px 0 10px 0;
        border: none;
        cursor: pointer;
        background-color: #e8474c;
        color: white;
        font-weight: bold;
        padding: 0.75em 1em;
        &:disabled {
            border: 1px solid #999999;
            background-color: #cccccc;
            color: #666666;
        }
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
