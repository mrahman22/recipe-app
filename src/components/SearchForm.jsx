import React, { useState } from "react";

export default function SearchForm({ getNewRecipe }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getNewRecipe(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" value={search} onChange={handleChange} placeholder="type in your main ingredient......."/>
      <button className="search-btn">Search</button>
    </form>
  );
}
