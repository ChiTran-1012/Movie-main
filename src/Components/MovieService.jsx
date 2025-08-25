const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getPopularMovies = async (page = 1) => {
  const res = await fetch(`${API_BASE_URL}/movie/popular?page=${page}`, API_OPTION);
  return res.json();
};

export const getTopRatedMovies = async (page = 1) => {
  const res = await fetch(`${API_BASE_URL}/movie/top_rated?page=${page}`, API_OPTION);
  return res.json();
};

export const getNowPlayingMovies = async (page = 1) => {
  const res = await fetch(`${API_BASE_URL}/movie/now_playing?page=${page}`, API_OPTION);
  return res.json();
};

export const getMovieDetail = async (id) => {
  const res = await fetch(`${API_BASE_URL}/movie/${id}`, API_OPTION);
  return res.json();
};

export const getMovieCredits = async (id) => {
  const res = await fetch(`${API_BASE_URL}/movie/${id}/credits`, API_OPTION);
  return res.json();
};

export const getMovieVideos = async (id) => {
  const res = await fetch(`${API_BASE_URL}/movie/${id}/videos`, API_OPTION);
  return res.json();
};

export const getMovieRecommendations = async (id) => {
  const res = await fetch(`${API_BASE_URL}/movie/${id}/recommendations`, API_OPTION);
  return res.json();
};

export const getMovieSimilar = async (id) => {
  const res = await fetch(`${API_BASE_URL}/movie/${id}/similar`, API_OPTION);
  return res.json();
};
// export const getTvShows = async (page = 1) => {
//   const res = await fetch(
//     `${API_BASE_URL}/tv/popular?page=${page}&language=en-US`,
//     API_OPTION
//   );
//   return res.json();
// };
// export const getTvDetail = async (id) => {
//   const res = await fetch(`${API_BASE_URL}/tv/${id}`, API_OPTION);
//   return res.json();
// };

// export const getTvCredits = async (id) => {
//   const res = await fetch(`${API_BASE_URL}/tv/${id}/credits`, API_OPTION);
//   return res.json();
// };

// export const getTvVideos = async (id) => {
//   const res = await fetch(`${API_BASE_URL}/tv/${id}/videos`, API_OPTION);
//   return res.json();
// };

// export const getTvSimilar = async (id) => {
//   const res = await fetch(`${API_BASE_URL}/tv/${id}/similar`, API_OPTION);
//   return res.json();
// };

// export const getTvRecommendations = async (id) => {
//   const res = await fetch(`${API_BASE_URL}/tv/${id}/recommendations`, API_OPTION);
//   return res.json();
// };

