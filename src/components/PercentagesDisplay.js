import React from "react";
import styled from "styled-components";
import LargeButton from "./LargeButton";

const RangeText = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.1rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const maxValueForPercentage = (percentage, totalValue) => {
  return (totalValue * percentage) / 100;
};

export default function PercentagesDisplay(props) {
  const { toggleDisplay, totalPoints } = props;
  return (
    <Container>
      <RangeText>
        Niedostateczny: 0 - {maxValueForPercentage(29, totalPoints)} pkt.
      </RangeText>
      <RangeText>
        Dopuszczający: {maxValueForPercentage(30, totalPoints)} -{" "}
        {maxValueForPercentage(49, totalPoints)} pkt.
      </RangeText>
      <RangeText>
        Dostateczny: {maxValueForPercentage(50, totalPoints)} -{" "}
        {maxValueForPercentage(74, totalPoints)} pkt.
      </RangeText>
      <RangeText>
        Dobry: {maxValueForPercentage(75, totalPoints)} -{" "}
        {maxValueForPercentage(89, totalPoints)} pkt.
      </RangeText>
      <RangeText>
        Bardzo dobry: {maxValueForPercentage(90, totalPoints)} -{" "}
        {maxValueForPercentage(99, totalPoints)} pkt.
      </RangeText>
      <RangeText>
        Celujący: {maxValueForPercentage(100, totalPoints)} pkt.
      </RangeText>

      <LargeButton onClick={toggleDisplay} text={"Zmień ilość pkt 🔙"} />
    </Container>
  );
}
