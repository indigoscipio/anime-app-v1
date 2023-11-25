import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchAnimeQuery } from "../api/api";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const { data, refetch, isLoading, error } = useSearchAnimeQuery(query);
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    refetch();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="searchInput">Search anime...</label>
        <input
          type="text"
          id="searchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search 🔍</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data && (
        <div>
          <h2>Showing results For:</h2>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
