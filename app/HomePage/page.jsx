"use client";

import MovieCard from "../components/MovieCard";
import { useState } from "react";

function HomePage() {
  const [searchQuery, setSearchquery] = useState("");

  const movies = [
    { id: 1, title: "Top Gun Mavrick", release_date: "1999" },
    { id: 2, title: "Uncharted", release_date: "2023" },
    { id: 3, title: "No Way Home", release_date: "2021" },
    { id: 4, title: "The Matrix", release_date: "1998" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <>
      <div className="home">
        {/* Search bar display section */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies"
            className="saerch-input"
            value={searchQuery}
            onChange={(e) => setSearchquery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {/* Movie Cards display section */}
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
