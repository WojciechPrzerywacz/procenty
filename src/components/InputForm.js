import React from "react";
import styled from "styled-components";
import LargeButton from "./LargeButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 320px;
  margin-top: 40px;
  background: ${(props) => props.theme.background};
  border-radius: 10px;
`;

const LoginInput = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.text};
  background: none;
  font-weight: 600;
  width: 100%;
  transition: 0.2s;
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  &::placeholder {
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }
  &:active {
    outline: none;
    border-bottom-color: ${(props) => props.theme.primary};
  }
  &:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.primary};
  }
  &:hover {
    outline: none;
    border-bottom-color: ${(props) => props.theme.primary};
  }
`;

const LoginField = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function InputForm(props) {
  const { toggleDisplay, setPoints } = props;
  return (
    <Container>
      <Form>
        <LoginField>
          <i></i>
          <LoginInput
            type="number"
            placeholder="Ilość punktów:"
            onChange={(e) => setPoints(e.target.value)}
          />
        </LoginField>
      </Form>
      <LargeButton onClick={toggleDisplay} text={"Oblicz ✨"} />
    </Container>
  );
}
