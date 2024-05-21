import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import logo from "../images/logo2.png"

const Container = styled.div`
  width: 90vw;
  margin: 5% auto;
  background-color: var(--light);
  box-shadow: 0 10px 100px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  border-radius: 20px;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  background-color: var(--dark);
`;
const Login = () => {
  const [cred, setCred] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: cred.email, password: cred.password }),
    });
    const json = await response.json();
    if(json.success === true){
      localStorage.setItem('token', json.authToken);
      navigate("/");
    }
    else{
      alert("Login with correct credientials")
    }
  };
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  return (
    <>
    <Logo>
        <Logoitem src={logo} />
        <Heading>Authenticate Yourself!</Heading>
      </Logo>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={cred.email}
          onChange={onChange}
          placeholder="Your email ..."
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={cred.password}
          onChange={onChange}
          placeholder="Your password ..."
        />
        <Button>Log In</Button>
      </Form>
    </Container>
    </>
  );
};

export default Login;
