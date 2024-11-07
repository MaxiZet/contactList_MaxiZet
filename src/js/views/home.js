import React from "react";
import "../../styles/home.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/card.js";

export const Home = () => {
  const { actions, store } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!</h1>
      {store.contacts.map((item, index) => {
        return <ContactCard key={index} name={item.name} />;
      })}
    </div>
  );
};
