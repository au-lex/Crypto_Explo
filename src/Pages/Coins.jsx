import React, { useState, useEffect } from "react";
import HeaderFooter from "../Component/Header/HeaderFooter";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const coinsPerPage = 14;

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}&page=${page}&sparkline=false`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setCoins(data);
          console.log(data);
        } else {
          console.error("Error fetching data:", data);
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setLoading(false);
    };

    fetchCoins();
  }, [page]);

  return (
    <div className="text-white pb-[20rem] container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Coins</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className="flex flex-wrap justify-center gap-4">
            {coins.map((coin) => (
              <li key={coin.id} className="coin-card bg-gray-800 shadow-lg rounded p-4">
                <figure>
                  <section>
                    <div className="coin-img-container w-[130px] mb-2">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-full h-full rounded"
                      />
                    </div>
                    <h3 className="text-lg font-medium">{coin.name}</h3>
                    <p className="text-sm">${coin.current_price.toFixed(2)}</p>
                  </section>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Previous
            </button>
            <button 
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <HeaderFooter />
    </div>
  );
};

export default Coins;






