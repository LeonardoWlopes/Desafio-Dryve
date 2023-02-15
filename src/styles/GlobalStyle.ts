import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
 }

 a {
    text-decoration: none;
 }

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
`;
