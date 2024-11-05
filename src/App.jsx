import { useState, useEffect } from "react";
import "./App.css"; 

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/form";

export default function App() {
  const apiKey = "98e3fb1f"; 
 
  const [movie, setMovie] = useState(null);

const movieTitles = [
  "Inception",
  "Titanic",
  "Avatar",
  "The Matrix",
  "Gladiator",
];

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data); 
    } catch (e) {
      console.error(e); 
    }
  };

  useEffect(() => {
    
    const randomMovie =
      movieTitles[Math.floor(Math.random() * movieTitles.length)];
    getMovie(randomMovie); 
  }, []);


  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
