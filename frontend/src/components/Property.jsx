import React, { useContext, useEffect, useRef, useState } from "react";
import propertyContext from "../context/PropertyContext";
import styled from "styled-components";
import PropertyItems from "./PropertyItems";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 90vw;
  min-height: 60vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5% auto;
  background-color: var(--bg);
  border-radius: 20px;
`;
const Form = styled.form`
  width: 100%;
  background-color: var(--light);
  
`;
const Label = styled.label`
  display: block;
  padding: 10px 0;
`;
const Input = styled.input`
  display: block;
  padding: 10px;
  width: -webkit-fill-available;
  outline: none;
  background: transparent;
  border: 1px solid black;
`;
const Button = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--dark);
`;

const Property = () => {
  const [land, setLand] = useState({
    id: "",
    ename: "",
    edescription: "",
    earea: "",
    etype: "",
    elocation: "",
    etag: "",
    eprice: "",
    ephone: "",
  });
  const context = useContext(propertyContext);
  const { property, getProperty, editProperty } = context;
const navigate = useNavigate();
  //to call user specific property from database
  useEffect(() => {
    if(localStorage.getItem('token')){
    getProperty();
    }
    else{
      navigate("/signup")
    }
     // eslint-disable-next-line 
  },[]);
  const ref = useRef(null);
  const refClose = useRef(null);

  const onChange = (e)=>{
    setLand({...land , [e.target.name] :  e.target.value})
  }

  const updateProperty = (currentproperty) => {
    ref.current.click();
    setLand({id :currentproperty._id, ename: currentproperty.name, edescription:currentproperty.description, earea:currentproperty.area, etype:currentproperty.type, elocation:currentproperty.location, etag:currentproperty.tag, eprice:currentproperty.price, ephone:currentproperty.phone})
  };

  const handleClick =()=>{
    refClose.current.click();
    editProperty({id :land.id, name: land.ename, description:land.edescription, area:land.earea,type:land.etype, location:land.elocation, tag:land.etag, price:land.eprice, phone:land.ephone})
  }

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit Your Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <Form>
          <Label htmlFor="name">Name:</Label>
          <Input
            name="ename"
            type="text"
            value={land.ename}
            id="name"
            onChange={onChange}
          />
          <Label htmlFor="description">Description:</Label>
          <Input
            name="edescription"
            type="text"
            value={land.edescription}
            id="description"
            onChange={onChange}
          />
          <Label htmlFor="area">Area:</Label>
          <Input
            name="earea"
            type="text"
            value={land.earea}
            id="area"
            onChange={onChange}
            
          />
          <Label htmlFor="type">Type:</Label>
          <Input
            name="etype"
            type="text"
            value={land.etype}
            id="type"
            onChange={onChange}
            
          />
          <Label htmlFor="location">Location:</Label>
          <Input
            name="elocation"
            type="text"
            value={land.elocation}
            onChange={onChange}
            id="location"
            
          />
          <Label htmlFor="tag">Tag:</Label>
          <Input
            name="etag"
            type="text"
            value={land.etag}
            onChange={onChange}
            id="tag"
          />
          <Label htmlFor="price">Price:</Label>
          <Input
            name="eprice"
            type="text"
            value={land.eprice}
            onChange={onChange}
            id="price"
          />
          <Label htmlFor="phone">Phone No:</Label>
          <Input
            name="ephone"
            type="phone"
            value={land.ephone}
            onChange={onChange}
            id="phone"
            
          />
        </Form>
            </div>
            <div className="modal-footer">
              <Button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Dismiss
              </Button>
              <Button
                onClick={handleClick}
                type="button"
                className="btn"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {property.length === 0 && "Oops! No property listed for sell!"}
        {property.map((item) => {
          return <PropertyItems key={item._id} updateProperty={updateProperty} property={item} />;
        })}
      </Container>
    </>
  );
};

export default Property;
