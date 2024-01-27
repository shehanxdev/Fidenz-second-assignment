import React, { useState } from "react";
import { CARD_COLORS } from "../../constants";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddButtonClick = () => {
    alert("This feature is under construction");
  };

  return (
    <div className="d-flex justify-content-center ">
      <input
        className="border-0  p-2 rounded-2 text-light"
        type="text"
        placeholder=" Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          backgroundColor: CARD_COLORS.black,
          height: "2.5rem",
          width: "18rem",
        }}
      />
      <button
        className="px-5 py-2 rounded "
        onClick={handleAddButtonClick}
        style={{
          marginLeft: "-8px",

          backgroundColor: CARD_COLORS.purple,
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}

export default SearchBar;
