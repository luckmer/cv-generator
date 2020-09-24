import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    html,body{
        background-color:#F5F5F5;
        width:100vw;
        height:100vh;
    }
`;

export default GlobalStyle;
