import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  background-color: var(--dark);
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100vw;
  bottom: 0;
  padding: 15px 0;
  @media (max-width: 450px) {
    padding-bottom: 25%;
    flex-direction: column-reverse;
  }
`;
const Heading = styled.h2`
color: var(--bg);
  width: 100%;
  padding: 10px;
  text-align: center;
`;

const Para = styled.p`
color: var(--bg);
  text-align: center;
  width: 100%;
`;
const Left = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  min-width: 200px;
`;

const First = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
  align-items: flex-start;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
`;

const Social = styled.a`
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
const Logo = styled.h1`
color: var(--bg);
  object-fit: contain;
  padding: 0 20px;
  margin: 10px;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Li = styled.li`
  padding: 5px;
  margin: 5px;
  text-decoration: none;
`;
const Button = styled.button`
background-color: var(--light);
border: none;
padding: 8px;
margin: 10px 5px;
border-radius: 10px;
@media (max-width: 450px) {
  display: none;
  }
`
const Footer = () => {
  return (
    <Container>
      <First>
        <Heading>Dream Land.</Heading>
        <Para>THE REAL STATE COMPANY</Para>
        <Para>Easily sell your property, Plots and also rent your home. Get conected with million of buyer and seller in a few steps. </Para>

      <Para>copyright©-2022-MALIK USMAN Mern-Developer </Para>
      </First>
      <Left>
        <Heading>Our Social Links</Heading>
        <Social
          href="https://www.facebook.com/profile.php?id=100015209078932"
          target="_blank"
        >
          <FacebookIcon /> -Facebook
        </Social>

        <Social
          href="https://www.linkedin.com/in/malik-usman-03b094241/"
          target="_blank"
        >
          <LinkedInIcon /> -Linked In
        </Social>
        <Social href="https://www.instagram.com/www_malikmani/" target="_blank">
          <InstagramIcon /> -Instagram
        </Social>
        <Social href="mailto:malik9723usman@gmail.com" target="_blank">
          <EmailIcon /> -E-mail Us
        </Social>
      </Left>

      <Right>
        <Logo>Navigation</Logo>
        <Ul>
          <Li as={Link} to="/">
            Home
          </Li>
          <Li as={Link} to="/sellforme">
            Sell
          </Li>
          <Li as={Link} to="/findroperty">
            Discover
          </Li>
          <Button>
            <Li as={Link} to="/signup">
              Sign Up
            </Li>
          </Button>
        </Ul>
      </Right>
    </Container>
  );
};

export default Footer;
