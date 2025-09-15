import React, { useState } from 'react';
import NavBar from './NavBar';
import './MainPage.css';

const imagesData = {
  Flowers: [
    '/assets/flowers/flower1.jpeg',
    '/assets/flowers/flower2.jpeg',
    '/assets/flowers/flower3.jpeg',
    '/assets/flowers/flower4.jpeg',
    '/assets/flowers/flower5.jpeg',
    
  ],
  Birds: [
    '/assets/birds/bird1.jpeg',
    '/assets/birds/bird2.jpeg',
    '/assets/birds/bird3.jpeg',
    '/assets/birds/bird4.jpeg',
    '/assets/birds/bird5.jpeg',
    
  ],
  Animals: [
    '/assets/animals/lion.jpg',
    '/assets/animals/tiger.jpg',
    '/assets/animals/elephant.jpg',
    '/assets/animals/deer.jpg',
    '/assets/animals/redpanda.jpg',
    '/assets/animals/mini.jpg',
  ],
  Favorites: [], // will be dynamically filled
};

function MainPage({ favorites, toggleFavorite }) {
  const [currentSection, setCurrentSection] = useState('Flowers');

  const displayImages = currentSection === 'Favorites' ? favorites : imagesData[currentSection];

  return (
    <div className="mainpage-container">
      <NavBar
        sections={['Flowers', 'Birds', 'Animals', 'Favorites']}
        currentSection={currentSection}
        onChange={setCurrentSection}
      />
      <h2 className="section-title">{currentSection}</h2>
      <div className="image-container">
        {displayImages.length === 0 && <p>No images to display.</p>}
        {displayImages.map((img, idx) => (
          <div className="image-wrapper" key={idx}>
            <img
              src={img}
              alt={`${currentSection} ${idx + 1}`}
              className="gallery-image"
            />
            {currentSection !== 'Favorites' && (
              <span
                className={`heart-icon ${favorites.includes(img) ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(img)}
                title={favorites.includes(img) ? 'Remove from favorites' : 'Add to favorites'}
              >
                {favorites.includes(img) ? '❤️' : '🤍'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
