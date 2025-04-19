import React, {useState} from "react";

function NewPlantForm() {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewPlant((newPlant) => ({ ...newPlant, [name]: value }));
  }
   function handleSubmit(event) {
     event.preventDefault();

     fetch("http://localhost:6001/plants", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         ...newPlant,
         price: parseFloat(newPlant.price),
         isInStock: true, 
       }),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log("Plant added:", data);
         
       });
   }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
