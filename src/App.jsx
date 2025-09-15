import React, { useState } from 'react';
import MainPage from './components/MainPage';

function App() {
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite: add if not in favorites, remove if present
  const toggleFavorite = (img) => {
    if (favorites.includes(img)) {
      setFavorites(favorites.filter((fav) => fav !== img));
    } else {
      setFavorites([...favorites, img]);
    }
  };

  return (
    <div>
      <MainPage favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
