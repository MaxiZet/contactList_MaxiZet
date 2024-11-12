import React from "react";
import "../../styles/home.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/card.js";

export const Home = () => {
  const { actions, store } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Contact List!</h1>
      {store.contacts.map((item, index) => {
        return (
          <ContactCard
            key={index}
            name={item.name}
            email={"Email: " + item.email}
            address={"Address: " + item.address}
            phone={"Phone: " + item.phone}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
