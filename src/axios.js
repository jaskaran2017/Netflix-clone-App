import axios from "axios";

/* base url to make requeststo the movie data base*/

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

/* here i have made one base url which will be used as the prefix to all our request made to fetch data through api call via axios*/
