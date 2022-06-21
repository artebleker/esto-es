import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import "./search.css";
const SearchArea = () => {
  const dataContext = useContext(DataContext);

  const handleChange = (e) => {
    var result = e.target.value;
    dataContext.setSearchQuery(result);
    console.log(dataContext.searchQuery);
  };

  const handleClick = () => {
    dataContext.setQuery(dataContext.searchQuery.toLowerCase());
    dataContext.setSearchQuery("");
  };

  return (
    <div className="searchArea ">
      <input
        type="text"
        name="search"
        placeholder="Enter your search..."
        className="search-input"
        id="searchArea"
        onChange={handleChange}
      />
      <Link to={`/search-page`} className="search-button" onClick={() => handleClick}>
        Search
      </Link>
    </div>
  );
};

export default SearchArea;
