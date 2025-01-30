import React from "react";

const EventList = ({ events }) => {
  console.log(events);
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={index} className="p-4 border rounded">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p>{event.startDate}</p>
          <p>{event.endDate}</p>
          <p>{event.location}</p>
          {event.media && (
            <img
              src={event.media}
              alt="Event Media"
              className="mt-2 w-32 h-40 object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default EventList;
