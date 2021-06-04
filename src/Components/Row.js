import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

///////////////////////////////////

function Row({ title, fetchUrl , isLargeRow}) {
  const [movies, setMovies] = useState([]);
const[trailerUrl, setTrailerUrl]= useState('')

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    /* 1) useEffect run only once when page loaded or reloaded and it will run twice if we put any dependancy inside [], the second aurgument
        2) here i am going to call the api so i have to call it as an async request but we can't use  async directly inside useEffect so i will make a small function inside and then call the api.
      */
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      console.log(res);
      setMovies(res.data.results);
      return res;
    }
    // if (movies !== "") {
    // }
    fetchData();
    /* one more thing and important is when ever we are using a veriable inside useEffect which we pulling from outSide of the component it must be included in as dependancy array e.g (fetchUrl) */
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
const handleClick=(movie)=>{
  if(trailerUrl){
    setTrailerUrl("")
  }else{
    movieTrailer(movie?.name || "").then((url)=>{
      //https:/www.youtube.com/watch?v=XtMThy8QKqU&
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get('v'));
    })
      .catch(error=> console.log(error));//this will give us the string of URL after the equal sign. 
  }

}

  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=> handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterBig"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {
        trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>
      }
    </div>
  );
}

export default Row;
