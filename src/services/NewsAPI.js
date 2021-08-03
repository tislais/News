/* eslint-disable max-len */


export const fetchNews = async () => {
  const res = await fetch(`
    https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}`);
  const json = await res.json();
  return json;
};

export const searchNews = async (searchTerm) => {
  const res = await fetch(`
    https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.API_KEY}`);
  const json = await res.json();
  return json;
};

