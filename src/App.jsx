import React, { useState, useEffect } from 'react';
import CatCard from './components/CatCard'; 
import BanList from './components/BanList'; 
import HistoryList from './components/HistoryLIst';

const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY; 

const App = () => {
  const [cat, setCat] = useState({});
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCatDiscovered, setIsCatDiscovered] = useState(false); 


  const fetchNewCat = async () => {
    try {
      let catData = null; 
  
      
      while (!catData || banList.includes(catData.id) || !catData.breeds || catData.breeds.length === 0) {
        const response = await fetch(`${API_URL}?limit=1`, {
          headers: { 'x-api-key': API_KEY },
        });
        const data = await response.json();
        catData = data[0]; 
      }
  
      setCat(catData); 
      setHistory((prevHistory) => [...prevHistory, catData]);
      setIsCatDiscovered(true); 
    } catch (error) {
      console.error('Error fetching cat data:', error);
    }
  };


  const banCat = (catAttribute) => {
    if (!banList.includes(catAttribute)) {
      setBanList((prevBanList) => [...prevBanList, catAttribute]);
    }
  };

  return (
    <div>
      <div className="container">
        <BanList className="ban-list" banList={banList} />
        
        <div className="cat-card">
          <h1>Veni Vici!</h1>
          <h3>Discover New Cats 🐈‍⬛ 😼 🐈 😸 🐾 😽</h3>
          <button onClick={fetchNewCat}>Discover New Cat 😻</button>
          {isCatDiscovered && cat.breeds && cat.breeds.length > 0 && (
            <CatCard
              cat={cat}
              banCat={banCat}
              fetchNewCat={fetchNewCat}
            />
          )}
        </div>

        {isCatDiscovered && <HistoryList className="history-list" history={history} />}
      </div>
    </div>
  );
};

export default App;