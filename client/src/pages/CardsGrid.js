import React from "react";
import Card from "./Card";
import Profile from "./Profile";
import "./css/card.css";

const CardsGrid = ({ data }) => {
  console.log(data);
  return (
    <section id="card-grid">
      {data.map((eachobj, index) => (
        <Card key={index} data={eachobj}></Card>
      ))}
    </section>
  );
};

export default CardsGrid;
