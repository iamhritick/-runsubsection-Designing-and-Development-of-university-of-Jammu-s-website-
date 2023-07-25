import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListComponent.css';

const ListComponent = () => {
  const [items, setItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  const displayedItems = [];
  const totalItems = Math.min(items.length, itemsPerPage);

  for (let i = 0; i < totalItems; i++) {
    const itemIndex = (startIndex + i) % items.length;
    displayedItems.push(items[itemIndex]);
  }

  return (
    <div className="list-container">
      <h2>Items List</h2>
      <div className="items-container">
        <div className="arrow left-arrow" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </div>
        {displayedItems.map((item) => (
          <div key={item._id} className="item">
            {item.photo && (
              <img
                src={item.photo}
                alt={item.text}
                className="item-image"
                onClick={() => handleClick(item.link)}
              />
            )}
            <p onClick={() => handleClick(item.link)}>{item.text}</p>
          </div>
        ))}
        <div className="arrow right-arrow" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
