import { capitalize } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 3%;
  margin: 1% ;
  min-width: 300px;
  max-width: 400px;  flex: 1;
  background-color: var(--sky);
  border-radius: 0px 30px 0px 30px;
`;
const Nameprice = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Action = styled.div`
  margin: 5% 0;
  display: flex;
  justify-content: space-around;
`;
const Type = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;
const H5 = styled.h5`
  margin: 20px 5px;
  height: 80px;
  width: 100%;
  overflow:auto;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const H6 = styled.h6`
  margin: 0 5px;
  text-align: end;
`;
const Button = styled.a`
width: 100%;
padding: 10px;
background-color: green;
border-radius: 20px;
`

const PropertiesItems = (props) => {
  const { property } = props;

  const created_date = new Date(property.date);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = created_date.getFullYear();
  const month = months[created_date.getMonth()];
  const date = created_date.getDate();
  const time = date + "," + month + "," + year; // final date with time, you can use this according your requirement

  return (
    <Card>
      <Nameprice>
        
        <H6>Owner:{property.name}</H6> <H6>Rs:{property.price}</H6>
      </Nameprice>

      <H5>{capitalize( property.description)}</H5>
      <hr/>
      <Type>
        Land Type:<H6>{property.type}</H6>
      </Type>
      <Type>
        Land Area:<H6>{property.area}</H6>
      </Type>
      <Type>
        Location:<H6>{property.location}</H6>
      </Type>
      <Action>Listed On: {time}</Action>
      <Button href={"tel:"+ property.phone}>Call Now</Button>

    </Card>
  );
};

export default PropertiesItems;
