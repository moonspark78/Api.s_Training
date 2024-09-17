import { useEffect, useState } from 'react';
import './App.css';

function App() {
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
    <div className="App">
     
    </div>
  );
}

export default App;
