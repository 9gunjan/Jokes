export const baseURL = "https://jsonmock.hackerrank.com/api/tvseries";

export const GET = async ({URL}) => {
  const response = await fetch(URL);
  return response.json();

}