import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Discovermoviespage() {
  const [searchText, set_searchText] = useState("");
  const [movies, set_movies] = useState([]); //how will code break without any empty array?

  const [searchState, set_searchState] = useState({ status: "idle" });

  const fetchData = async () => {
    set_searchState({ status: "Searching..." });

    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(`https://omdbapi.com/?i=tt3896198&apikey=dd9c72c1&s=${searchText}`);
    console.log("response", response.data.Search);
    set_movies(response.data.Search);

    set_searchState({ status: "done", data: response });
  };

  return (
    <div>
      <h2>Discover some movies!</h2>
      {/* input can take properties like value, onchange, placeholder*/}
      <input value={searchText} onChange={(event) => set_searchText(event.target.value)} />
      <button onClick={fetchData}> Search </button>
      {!movies
        ? "Loading"
        : movies.map((movie) => {
            return (
              <div key={movie.imdbID}>
                <link to="/">
                  <h3>{movie.Title}</h3>
                </link>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            );
          })}
      ;
      {/* <p> {searchState.status === "done"} 
        </p>{ */}
    </div>
  );
}
