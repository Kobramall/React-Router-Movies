import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      
      <SavedList list={[ /* This is stretch */]} />
      <Link to="/">List</Link>
      <Link to="/Movies/:id">Movie</Link>
   
    <Route exact path="/">
      <MovieList movies = {movieList}/>
    </Route>
    <Route path="/Movies/:id">
      
    </Route>
    </div>
  );
}
