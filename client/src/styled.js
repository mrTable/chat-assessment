import { createGlobalStyle } from 'styled-components';
import { purple } from 'constants/colors';

// TODO root style doesn't belong here
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    min-width: 320px;
    font-size: 1.4rem;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    color: black;
    margin: 0;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }
  #root {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export const buttonColoringMixin = () => `
  transition: all 0.5s;
  background: ${purple};
  color: white;
  &:hover{
    background: white;
    color: ${purple};
  }
`;
