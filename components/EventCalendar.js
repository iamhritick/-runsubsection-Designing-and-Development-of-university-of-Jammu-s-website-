import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './EventCalendar.css';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-calendar-container">
      <h2 className="event-calendar-title">Event Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events.map((event) => ({
          title: event.title,
          start: event.date,
          description: event.description,
          url: event.link, // Update the property name to "url"
        }))}
        eventContent={({ event }) => (
          <div>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              {event.title}
            </a>
            <p>{event.start.toLocaleDateString()}</p>
          </div>
        )}
        eventClick={({ event }) => {
          if (event.url) {
            window.open(event.url, '_blank');
          }
        }}
        eventDidMount={({ event, el }) => {
          el.addEventListener('mouseover', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'event-tooltip';
            tooltip.textContent = event.extendedProps.description;
            el.appendChild(tooltip);
          });

          el.addEventListener('mouseout', () => {
            const tooltip = el.querySelector('.event-tooltip');
            if (tooltip) {
              el.removeChild(tooltip);
            }
          });
        }}
      />
    </div>
  );
};

export default EventCalendar;
