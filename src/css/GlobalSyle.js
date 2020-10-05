import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        overflow-x:hidden;
    }
    html,body{
        background-color:#fafafa;
        width:100vw;
        height:100vh;
    }
`;

export default GlobalStyle;
