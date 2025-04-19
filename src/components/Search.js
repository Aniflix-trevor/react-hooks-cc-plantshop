import React, { useState } from "react";

function Search({ plants, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(e) {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      const filteredPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(term.toLowerCase())
      );
      onSearch(filteredPlants);
    }
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
