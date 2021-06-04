const APIKEY = "3e1fa0bd24b99edbb534450f8600b235";
const requests = {
  fetchTranding: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en_US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with-geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with-geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with-geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with-geners=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with-geners=99`,
};

export default requests;
