import React from 'react'
import { useEffect, useState } from 'react';

const Coin = () => {
    const [cryptoData, setCryptoData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20");
        const data = await response.json();
        setCryptoData(data);
        console.log(data);
        
      };
      fetchData();
    },[])
  return (
    <div>
         {
        cryptoData.map((crypto) =>(
          <img alt={crypto.name} src={crypto.image}/>
        ))
        }
    </div>
  )
}

export default Coin