// import axios from "axios";
// import { useState, useEffect } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  //   const params = useParams();

  //   const id = params.id;
  const { id } = useParams();

  //   console.log("id");

  //Probably url is the problem its not working

  //   cant console log Id==in console data

  const fetchDate = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=dd9c72c1&i=${id}`);
    console.log("response", response);

    setMovie(response.data);
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <div>
      {" "}
      <h1> Movie Details Page</h1> <h3> {movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}
