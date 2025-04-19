import React from "react";
import PlantCard from "./PlantCard";


function PlantList({ plants }) {
  return (
    <ul className="cards">
      
      {/* {plants.map((plant) => (
      <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        isInStock={plant.isInStock}
      />
    ))} */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          isInStock={plant.isInStock}
        />
      ))}
    </ul>
  );
}

export default PlantList;
