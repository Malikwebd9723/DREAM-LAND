import React, { useContext, useState } from "react";
import Property from "./Property";
import styled from "styled-components";
import PropertyContext from "../context/PropertyContext";

const Container = styled.div`
    width: 90vw;
    margin: 5% auto;
    background-color: var(--light);
    box-shadow: 0 10px 100px 0 rgb(31 38 135 / 37%);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2%;
`;
const Heading = styled.h1`
text-align:center;`;
const Form = styled.form`
  width: 100%;
`;
const Label = styled.label`
  display: block;
  padding: 10px 0;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  width: -webkit-fill-available;
  outline: none;
  background: transparent;
  border: 1px solid black;
`;
const Button = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: var(--dark);
`;
const Note = styled.p`
  text-align: center;
  color: #${(props) => props.color};
`;

const Sell = () => {
  const context = useContext(PropertyContext);
  const { addProperty } = context;

  const [land, setLand] = useState({
    name: "",
    description: "",
    area: "",
    type: "",
    location: "",
    tag: "",
    price: "",
    phone: "",
  });

  const onChange = (e) => {
    setLand({ ...land, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addProperty(
      land.name,
      land.description,
      land.area,
      land.type,
      land.location,
      land.tag,
      land.price,
      land.phone
    );
    setLand({
      name: "",
      description: "",
      area: "",
      type: "",
      location: "",
      tag: "",
      price: "",
      phone: "",
    });
  };
  return (
    <>
      <Container id="sell">
        <Heading>Add New Property</Heading>
        <Form onSubmit={handleClick}>
          <Label htmlFor="name">Name:</Label>
          <Input
            name="name"
            type="text"
            value={land.name}
            id="name"
            onChange={onChange}
            placeholder="Owner Name"
            required
          />
          <Label htmlFor="description">Description:</Label>
          <Input
            name="description"
            type="text"
            value={land.description}
            id="description"
            onChange={onChange}
            placeholder="Land Description"
            minLength="10"
          />
          <Label htmlFor="area">Area:</Label>
          <Input
            name="area"
            type="text"
            value={land.area}
            id="area"
            onChange={onChange}
            placeholder="Total Area"
            required
          />
          <Label htmlFor="type">Type:</Label>
          <Input
            name="type"
            type="text"
            value={land.type}
            id="type"
            onChange={onChange}
            placeholder="rectangle, square, circuler etc"
            required
          />
          <Label htmlFor="location">Location:</Label>
          <Input
            name="location"
            type="text"
            value={land.location}
            onChange={onChange}
            id="location"
            placeholder="Your exact location"
            required
          />
          <Label htmlFor="tag">Tag:</Label>
          <Input
            name="tag"
            type="text"
            value={land.tag}
            onChange={onChange}
            id="tag"
            placeholder="Home, Plot, Rent"
            required
          />
          <Label htmlFor="price">Price:</Label>
          <Input
            name="price"
            type="text"
            value={land.price}
            onChange={onChange}
            id="price"
            placeholder="Enter your Price"
            required
          />
          <Label htmlFor="phone">Phone No:</Label>
          <Input
            name="phone"
            type="phone"
            value={land.phone}
            onChange={onChange}
            id="phone"
            placeholder="Valid Phone Number"
            required
          />
          <Button type="submit"
          >
            List Now
          </Button>
        </Form>
        <Note color="6a6a6a">We will sell for you!</Note>
      </Container>
      <Property />
    </>
  );
};

export default Sell;
