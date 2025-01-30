import React, { useState, useEffect } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleEventSubmit = (event) => {
    const newEvents = [...events, event];
    setEvents(newEvents);
    localStorage.setItem("events", JSON.stringify(newEvents));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>
      <EventForm onSubmit={handleEventSubmit} />
      <h1 className="text-2xl font-bold mt-8 mb-4">Event List</h1>
      <EventList events={events} />
    </div>
  );
};

export default App;
