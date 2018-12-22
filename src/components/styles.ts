import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,700');

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
  }
  
  html,
  body,
  body > div {
    width: 100%;
    height: 100%;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
  
  button {
    outline: 0;
    cursor: pointer;
  }
`;
