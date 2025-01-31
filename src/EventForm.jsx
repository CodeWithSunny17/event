import React, { useState } from "react";

const EventForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, startDate, endDate, location, description, media });
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMedia(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleMediaChange}
          className="w-full p-2 border rounded"
        />
        {media && (
          <img
            src={media}
            alt="Preview"
            className="mt-2 w-32 h-40 object-cover"
          />
        )}
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className=" flex flex-col justify-around">
          <span className="m-2">Start</span>

          <span className="m-2">End</span>
        </div>
        <div className="w-[50%] space-y-4">
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Event Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
