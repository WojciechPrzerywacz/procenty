import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: "#fcfcf7",
  text: "#012579",
  background: "#fcfcf7",
  primary: "#eb2c54",
};

export const darkTheme = {
  body: "#1b181a",
  text: "#fffdff",
  background: "#1b181a",
  primary: "#e3ab0e",
};
