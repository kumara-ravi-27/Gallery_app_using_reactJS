import React, { useState } from 'react';
import NavBar from './NavBar';
import './MainPage.css';

const imagesData = {
  Flowers: [
    '/assets/flowers/f1.jpg',
    '/assets/flowers/f2.jpg',
    '/assets/flowers/f3.jpg',
    '/assets/flowers/f4.jpg',
    '/assets/flowers/f5.jpg',
    '/assets/flowers/f6.jpg',
    '/assets/flowers/f7.jpg',
    
  ],
  Birds: [
    '/assets/birds/b1.jpg',
    '/assets/birds/b2.jpg',
    '/assets/birds/b3.jpg',
    '/assets/birds/b4.jpg',
    '/assets/birds/b5.jpg',
    '/assets/birds/b6.jpg',
    '/assets/birds/b7.jpg',
    '/assets/birds/b8.jpg',
    
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
