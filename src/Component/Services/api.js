// CoinGeckoService.js
const BASE_URL = 'https://api.coingecko.com/api/v3/';

export const getTrendingCoins = async () => {
  const response = await fetch(`${BASE_URL}search/trending`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending coins');
  }
  const data = await response.json();
  return data.coins;
};

export const getCoinPrices = async (coinIds) => {
  const ids = coinIds.join(',');
  const response = await fetch(`${BASE_URL}simple/price?ids=${ids}&vs_currencies=usd,btc`);
  if (!response.ok) {
    throw new Error('Failed to fetch coin prices');
  }
  const data = await response.json();
  return data;
};
