import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, *::after, *::before{
boz-sizing: border-box;
padding: 0;
margin: 0;
}

body{
font-family: 'Plus Jakarta Sans', sans-serif;
background-color:  ${({ theme }) => theme.color.Rose50};
}

img{
max-width: 100%;
}
`;

export default GlobalStyles;
