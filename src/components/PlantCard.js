import React,{useState} from "react";


function PlantCard({ name, image, price, isInStock : boolean }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleClick() {
    setIsInStock((isInStock) => !isInStock);
  }

  const className = isInStock ? "primary" : "secondary";

  return (
    <li data-testid="plant-item" className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={handleClick} className={className}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
