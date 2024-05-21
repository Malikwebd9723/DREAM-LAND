import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
`;

const Heading = styled.h1`
  text-shadow: 0px 0px 35px black;
  text-align: center;
  color: var(--dark);
  font-size: 3.7rem;
  @media (max-width: 450px) {
    font-size: 2.7rem;
  }
`;
const Error = () => {
  return (
    <Container>
      <Heading>OOPS! Page Not Found 🥺</Heading>
    </Container>
  );
};

export default Error;
