


import React, { useState, useEffect } from 'react';
import HeaderFooter from '../Component/Header/HeaderFooter';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&limit=10&sparkline=false&market_dominance=false&percent_change_display=false&market_cap_change_display=false&order_direction=desc&market_cap_display=false&percent_change_1h_display=false&percent_change_24h_display=false&percent_change_7d_display=false&order_by=market_cap&sparkline_in_7d_display=false&sparkline_display=false&order_by_direction=desc&sparkline_7d_in_currency=false&sparkline_in_currency=false';

function Coin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}&vs_currency=usd`, {
        });
        const result = await response.json();

        if (Array.isArray(result)) {
          setData(result);
          console.log(result);
        } else {
          console.warn('Unexpected API response structure:', result);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching the coins:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <div className="CoinContainer">
      
      {loading ? (
        <p>Loading...</p>
      ) : (

        
        <div>

<section className='flex justify-between py-4 '>

      <h1 className="CoinTitle text-[1.4rem] text-slate-200 font-bold">Coins</h1>

      <div class="input-wrapper">
  <button class="icon"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
    </svg>
  </button>
  <input placeholder="search.." class="input" name="text" type="text" />
</div>
      </section>



          {data.map(coin => (
            <div key={coin.id} className="CoinItem">
              <img src={coin.image} alt={coin.name} className="CoinImage"/>
              <p><strong>Name:</strong> {coin.name}</p>
              <p><strong>Symbol:</strong> {coin.symbol}</p>
              <p><strong>Price:</strong> ${coin.current_price}</p>
            </div>
          ))}
        </div>
      )}

    </div>
<HeaderFooter />
    </>
  );
}

export default Coin;
