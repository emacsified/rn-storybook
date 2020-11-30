import * as axios from "axios";
global.Buffer = global.Buffer || require("buffer").Buffer;

const baseURL = "https://api.themoviedb.org/3";
const APIKey = "88368d5cd0ed76a21cf77a434a8967ee";
const getMovie = (id) => {
  return new Promise((resolve, reject) => {
    const buildURL = (id) => {
      return `${baseURL}/movie/${id}?api_key=${APIKey}`;
    };
    axios
      .get(buildURL(id))
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  });
};

const getPoster = (id) => {
  const buildURL = (id) => {
    return `https://image.tmdb.org/t/p/w500${id}`;
  };
  return buildURL(id);
};

export { getMovie, getPoster };
