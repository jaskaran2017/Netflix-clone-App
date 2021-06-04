import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  // const []= useState()
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchTranding);
      //   console.log(res);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    }
    fetchData();
  }, []);
  //   console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  ///////////////////////////////
  return (
    <div>
      <header
        className="banner"
        style={{
          objectFit: "contain",
          backgroundSize: "cover",
          backgroundImage: `Url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__content">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__btn">
            <button className="btn">Play</button>
            <button className="btn">My List</button>
          </div>

          <h1 className="banner__discription">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner__fadeBottom"/>
      </header>
    </div>
  );
}

export default Banner;
