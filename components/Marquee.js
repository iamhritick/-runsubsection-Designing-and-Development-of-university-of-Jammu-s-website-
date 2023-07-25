import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Marquee.css"



const Marquee = () => {
    const [updates, setUpdates] = useState([]);
  
    useEffect(() => {
      const fetchUpdates = async () => {
        try {
          const response = await axios.get('./api/updates');
          setUpdates(response.data);
        } catch (error) {
          console.error(error.response.data);
        }
      };
  
      fetchUpdates();
    }, []);
  
    return (
      <div className="marquee-container">
        <div className="marquee-content">
          {updates.map((update, index) => (
            <a
              key={index}
              href={update.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`marquee-item ${index % 2 === 0 ? 'blue' : 'red'}`}
            >
              {update.title}: {update.content}
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Marquee;
  