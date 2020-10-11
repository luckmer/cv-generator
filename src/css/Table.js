import styled from "styled-components";
import colors from "./colors"
export const TableDesign = styled.table`
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 6px;
    margin: 10px 0 10px 0;
    border-bottom: 1px solid ${colors.clearWhite};
    p {
        width: 100%;
    }
    th,
    td {
        width: 100vw;
        padding: 20px;
        background-color: ${colors.white};
        color: ${colors.darkBlue};
    }
    button {
        background-color: ${colors.lightTomato};
        color: ${colors.white};
        font-weight: bold;
        border-radius: 20px;
        margin: 0 10px 0 10px;
        padding: 5px 10px 5px 10px;
        border: none;
    }
    @media screen and (max-width: 940px) {
        width:100%;
        th,td{
            width: calc(100% - 15px);
            display:flex;
            align-items:center;
            flex-direction:column;
        }
        button{
            margin:10px 0 0 0 ;
            border-radius:5px;
        }
    }
`;
