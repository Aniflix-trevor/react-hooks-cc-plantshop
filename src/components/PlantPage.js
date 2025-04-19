import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
      const [plants, setPlants] = useState([]);
      const [filteredPlants, setFilteredPlants] = useState(plants);

      useEffect(() => {
        fetch("http://localhost:6001/plants")
          .then((res) => res.json())
          .then((data) => setPlants(data));
      }, []);
  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search plants={plants} onSearch={setFilteredPlants} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
