import { baseURL } from "./index.js";
import { GET } from "./index.js";

export const getPaginatedMovieList = async ({ pageNumber }) => {
  // https://jsonmock.hackerrank.com/api/tvseries?page=1
  const fullUrl = `${baseURL}?page=${pageNumber}`;
  return GET({ URL: fullUrl });
};