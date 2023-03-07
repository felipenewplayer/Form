import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        width:100vw;
        height:100vh;
        background-color:#feefef;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family: 'Montserrat', sans-serif;
    }
`