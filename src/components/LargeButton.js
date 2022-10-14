import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 3rem;
  font-weight: 600;
  border: solid 2px ${(props) => props.theme.text};
  outline: 0;
  color: ${(props) => props.theme.text};
  padding: 1rem 4rem;
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.35rem;
  position: relative;
  cursor: pointer;
  padding: 1rem;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.primary};
    z-index: -1;
    border-radius: 0.35rem;
    border: solid 2px ${(props) => props.theme.primary};
    transition: all 0.3s ease-in-out;
    width: 90%;
    height: 90%;
  }

  &:hover {
    &:after {
      width: 100%;
      height: 100%;
      top: 0.5rem;
      left: 0.5rem;
    }
  }
`;

export default function LargeButton(props) {
  const { onClick, text } = props;
  return (
    <StyledButton onClick={onClick}>
      <span>{text}</span>
    </StyledButton>
  );
}
