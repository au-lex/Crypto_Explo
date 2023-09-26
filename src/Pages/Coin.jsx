// import React, { useState, useEffect } from 'react';

// const API_URL = 'https://api.coinranking.com/v2/coins';

// function Coin() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`${API_URL}?limit=10`, {
//           headers: {
//             'Authorization': 'coinranking45c331d35181825e32190d00502e7098182b8ffe6540d93d',
//           },
//         });
//         const result = await response.json();

//         if (result && result.data && Array.isArray(result.data.coins)) {
//           setData(result.data.coins);
//           console.log(result.data);
//         } else {
//           console.warn('Unexpected API response structure:', result);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching the coins:", error);
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="CoinContainer">
//       <h1 className="CoinTitle">Coinranking Coins</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {data.map(coin => (
//             <div key={coin.uuid} className="CoinItem">
//               <img src={coin.iconUrl} alt={coin.name} className="CoinImage"/>
//               <p><strong>Name:</strong> {coin.name}</p>
//               <p><strong>Symbol:</strong> {coin.symbol}</p>
//               <p><strong>Price:</strong> ${coin.price}</p>
          
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Coin;



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
      <h1 className="CoinTitle text-[1.4rem] text-slate-200 font-bold">Coins</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
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
