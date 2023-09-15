// TrendingCoins.js
import React, { useEffect, useState } from 'react';
import { getTrendingCoins, getCoinPrices } from '../Services/api';

const Test = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchData = async () => {
    try {
      setLoading(true);
      const trendingCoins = await getTrendingCoins();
      const coinIds = trendingCoins.map(coin => coin.item.id);
      const prices = await getCoinPrices(coinIds);

      const coinsWithPrice = trendingCoins.map(coin => ({
        ...coin.item,
        priceUSD: prices[coin.item.id].usd,
        priceBTC: prices[coin.item.id].btc
      }));

      setCoins(coinsWithPrice);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Set an interval to fetch data every 5 minutes (300000 milliseconds)
    const intervalId = setInterval(fetchData, 300000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='p-4 mt-[4rem]'>
      <h2 className="text-2xl font-bold mb-4 text-slate-200">Trending Coins</h2>
      <div className='flex justify-between px-2 border-b pb-4'>
      <p className='w-1/2 text-yellow-400 mb-4 shadow-md '>Last Updated: {lastUpdated.toLocaleString()}</p>
      <button className='bg-blue-500 text-white py-2 px-4 rounded mb-4' onClick={fetchData}>Refresh</button>
      </div>
      <ul>
        {coins.map(coin => (
          <li key={coin.id} className="mb-8 flex border-b pb-4 mt-3 "> 
            <figure className='w-20 h-20 mr-4'>
              <img src={coin.large} alt={coin.name} className='w-full h-full rounded'/>
            </figure>
  
            <figcaption>
              <h3 className="text-xl font-semibold text-yellow-500">{coin.name}</h3>
              <p className='text-white'>Symbol: {coin.symbol}</p>
              <p className='text-white'>Price in USD: ${coin.priceUSD}</p>
              <p className='text-white'>Price in BTC: {coin.priceBTC} BTC</p>
            </figcaption>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Test;
