import React from "react";
import styled from "styled-components";
import img1 from "../images/img1.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  opacity: 0.8;
  background-image: url(${img1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
const Heading = styled.h1`
text-shadow: 0px 0px 21px black;
  text-align: center;
  color: white;
  font-size: 3.7rem;
  @media (max-width: 450px) {
    font-size: 2.7rem;
  }
`;
const Para = styled.span`
  text-align: center;
  color: white;
  margin: 10px;
  font-size: 1.3rem;
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
const Button = styled.button`
background-color: var(--dark);
border: none;
  padding: 8px;
  margin: 10px 5px;
  color: black !important;
  border-radius: 10px;

`;
const Li = styled.li`
  padding: 5px;
  margin: 5px;
  list-style: none;
  text-decoration: none;
`;
const Home = () => {
  return (
    <>
      <Container>
        <Heading>Let`s Find Your Dream Property Here</Heading>
        <Para>Land on your land, <strong>Now !</strong></Para>
        <Button>
          <Li as={Link} to="/signup">
           Join Us
          </Li>
        </Button>
      </Container>
    </>
  );
};

export default Home;
