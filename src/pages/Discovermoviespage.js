import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Discovermoviespage() {
  const [searchText, set_searchText] = useState("");

  const search = async () => {
    const response = await axios.get(`https://omdbapi.com/?apikey=b3d9013d&s`);
    console.log("searched movie", search);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <h1>
        <input value={searchText} onChange={(Event) => set_searchText(Event.target.value)} />
        <form>
          <button onClick={search}> Search </button>
        </form>
      </h1>
    </div>
  );
}
