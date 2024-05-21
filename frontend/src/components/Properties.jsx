import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import PropertyContext from '../context/PropertyContext';
import PropertiesItems from './PropertiesItems';

const Container = styled.div`
  width: 90vw;
  min-height: 60vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color:var(--bg) ;
  margin: 5% auto;
`;


const Properties = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      getAllProperties();
      }
      else{
        navigate("/signup")
      }
  });

  const context = useContext(PropertyContext);
  const { allProperties, getAllProperties } = context;
  return (
    <Container>
        {allProperties.length === 0 && "Oops!Something went Wrong!"}
        {allProperties.map((item) => {
          return <PropertiesItems key={item._id} property={item} />;
        })}
      </Container>
  )
}

export default Properties
