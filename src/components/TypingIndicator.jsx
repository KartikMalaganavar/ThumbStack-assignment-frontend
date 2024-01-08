import React from "react";
import styled, { keyframes } from "styled-components";

const TypingIndicator = () => {
  return (
    <Container>
      <Dot1 />
      <Dot2 />
      <Dot3 />
    </Container>
  );
};

const waveAnimation = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-10px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
  animation: ${waveAnimation} 1.5s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    animation-delay: 0.5s;
  }
`;

const Dot1 = styled(Dot)``;
const Dot2 = styled(Dot)``;
const Dot3 = styled(Dot)``;

export default TypingIndicator;
