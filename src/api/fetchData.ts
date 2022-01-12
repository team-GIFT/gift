import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch(GIPHY_API_KEY);

export const fetchTrendingData = async (number = 5) => {
  const { data: gifs } = await gf.trending({ limit: number });
  return gifs;
};
