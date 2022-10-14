import React, { Fragment } from "react";
import styled from "styled-components";

const ThemeButton = styled.button`
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 30%;
  transition: 200ms;
  display: flex;
  justify-content: center;
  aign-items: center;
  align-text: center;
  border: 2px solid ${(props) => props.theme.text};
  position: absolute;
  top: 90%;
  left: 80%;
`;

export default function ThemeToggleButton(props) {
  const { toggleTheme, isDarkTheme } = props;
  return (
    <Fragment>
      <ThemeButton onClick={toggleTheme}>
        {isDarkTheme ? (
          <span aria-label="Light mode" role="img">
            🌞
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            🌜
          </span>
        )}
      </ThemeButton>
    </Fragment>
  );
}
