import { useEffect } from 'react';

import SearchIcon from './search.svg'
import './App.css';



// c39933ac

const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=c39933ac'

const movie1 ={
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
} 

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data)
  }

  useEffect(() =>{
    searchMovies('Spiderman');
  }, [])

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input type="text" placeholder='Search for movies' value='Superman' onChange={() => {}} />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        
      </div>
    </div>
  );
  }

export default App;
