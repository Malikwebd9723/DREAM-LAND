import React, { useState } from "react";
import PropertyContext from "./PropertyContext";

const PropertyState = (props) => {
  const host = "http://localhost:5000";
  const authToken =localStorage.getItem("token");
  const initialProperty = [];
  const [property, setProperty] = useState(initialProperty);
  const [allProperties, setProperties] = useState(initialProperty);

  
  //GET ALL PROPERTY USER SPECIFIC PROPERTY FOR SELL : LOGIN REQUIRE


  const getProperty = async () => {
    const response = await fetch(`${host}/api/property/fetchproperty`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
    });

    const json = await response.json();
    setProperty(json);
  };

  //GET ALL PROPERTY AVAILABLE FOR SELL
  const getAllProperties = async () => {
    const response = await fetch(`${host}/api/property/fetchallproperty`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setProperties(json);
  };

  //TO ADD NEW PROPERTY : LOGIN REQUIRE

  const addProperty = async (
    name,
    description,
    area,
    type,
    location,
    tag,
    price,
    phone
  ) => {
    const response = await fetch(`${host}/api/property/addproperty`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
      body: JSON.stringify({
        name,
        description,
        area,
        type,
        location,
        tag,
        price,
        phone,
      }),
    });
    const property = await response.json();
    setProperty(property.push(property))
  };

  //ENDPOINT TO DELETE PROPERTY : LOGIN REQUIRE

  const deleteProperty = async (id) => {
    const response = await fetch(`${host}/api/property/deleteproperty/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
    });
    response.json();
    const newProperty = property.filter((item) => {
      return item._id !== id;
    });
    setProperty(newProperty);
  };

  //ENDPOINT TO EDIT PROPERTY BY GETTING ID :: LOGIN REQUIRE
  const editProperty = async ({
    id,
    name,
    description,
    area,
    type,
    location,
    tag,
    price,
    phone,
  }) => {
    const response = await fetch(`${host}/api/property/updateproperty/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${authToken}`,
      },
      body: JSON.stringify({
        name,
        description,
        area,
        type,
        location,
        tag,
        price,
        phone,
      }),
    });
    response.json();

    const newProperty = JSON.parse(JSON.stringify(property));
    for (let index = 0; index < newProperty.length; index++) {
      const element = newProperty[index];
      if (element._id === id) {
        newProperty[index].name = name;
        newProperty[index].description = description;
        newProperty[index].area = area;
        newProperty[index].type = type;
        newProperty[index].location = location;
        newProperty[index].tag = tag;
        newProperty[index].price = price;
        newProperty[index].phone = phone;
      }
      break;
    }
    setProperty(newProperty);
  };
  return (
    <PropertyContext.Provider
      value={{
        allProperties,
        getAllProperties,
        property,
        getProperty,
        addProperty,
        deleteProperty,
        editProperty,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};

export default PropertyState;
