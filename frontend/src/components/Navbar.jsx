import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: var(--dark);
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
color: var(--bg);
  object-fit: contain;
  padding: 0 20px;
  margin: 10px;
`;
const Ul = styled.ul`
  display: flex;
  margin: 0;
  @media (max-width: 450px) {
    display: flex;
    position: fixed;
    padding: 20px;
    border-radius: 49px;
    bottom: 20px;
    z-index: 2;
    background-color: #0000006b;
    justify-content: center;
    width: 100%;
  }
`;
const Li = styled.li`
  padding: 5px;
  margin: 5px;
  list-style: none;
  text-decoration: none;
`;
const Button = styled.button`
background-color: var(--sky);
  padding: 8px;
  margin: 0 5px;
  border-radius: 10px;
`;
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/signup')
  }
  return (
    <>
      <Container>
        <Nav>
          <Logo><i>DL.</i></Logo>
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

          {localStorage.getItem('token')?
          <Button onClick={handleLogout}>
                Log Out
            </Button>:
            <Button>
              <Li as={Link} to="/signup">
                Sign Up
              </Li>
            </Button>}
          </Ul>
        </Nav>
      </Container>
    </>
  );
};

export default Navbar;
