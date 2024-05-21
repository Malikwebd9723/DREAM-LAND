import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo1.png";

const Container = styled.div`
  width: 90vw;
  margin: 5% auto;
  background-color: var(--light);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2%;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logoitem = styled.img`
  width: 30%;
  border: 1px solid var(--dark);
  border-radius: 50%;
  margin-top: 3%;
`;
const Heading = styled.h1`
text-shadow: 0px 0px 21px black;
  text-align: center;
  color: var(--dark);
  margin-top: 3%;
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
const Form = styled.form`
  width: 100%;
`;
const Label = styled.label`
  display: block;
  padding: 10px 0;
`;
const Input = styled.input`
  display: block;
  padding: 10px;
  width: 100%;
  outline: none;
  background: transparent;
  border: none;
`;
const Button = styled.button`
  margin: 5px 0;
  padding: 5px 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: var(--dark);
`;
const Login = styled.a`
  margin: 5px 10px;
  padding: 5px 15px;
  cursor: pointer;
`;
const Signup = () => {
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cred.name,
        email: cred.email,
        password: cred.password,
      }),
    });
    const json = await response.json();
    if (json.success === true) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert("User already exist!. Please, Try another Email");
    }
  };
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Logo>
        <Logoitem src={logo} />
        <Heading>Let`s Join our community</Heading>
      </Logo>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            name="name"
            id="name"
            value={cred.name}
            onChange={onChange}
            placeholder="Your name ..."
            required
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={cred.email}
            onChange={onChange}
            placeholder="Your email ..."
            required
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={cred.password}
            onChange={onChange}
            placeholder="Your Password ..."
            required
          />
          <Button>Register</Button>
          <Login as={Link} to="/login">
            Already user?
          </Login>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
