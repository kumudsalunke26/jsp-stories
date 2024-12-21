

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PublishStory = ({ addStory }) => {
  const [newStory, setNewStory] = useState({
    imageUrl: "",
    headline: "",
    content: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStory.imageUrl && newStory.headline && newStory.content) {
      addStory(newStory);
      navigate("/");
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center pb-[50rem] pt-[2rem]">
        
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80rem] h-[40rem]">
        <h2 className="text-2xl font-bold mb-4 flex items-center">Publish a New Story</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Image URL"
            value={newStory.imageUrl}
            onChange={(e) =>
              setNewStory({ ...newStory, imageUrl: e.target.value })
            }
            className="w-full mb-4 p-2 border rounded placeholder:border-opacity-60"
          />
          <input
            type="text"
            placeholder="Headline"
            value={newStory.headline}
            onChange={(e) =>
              setNewStory({ ...newStory, headline: e.target.value })
            }
            className="w-full mb-4 p-2 border rounded placeholder:border-opacity-60"
          />
          <textarea
            placeholder="Content"
            value={newStory.content}
            onChange={(e) =>
              setNewStory({ ...newStory, content: e.target.value })
            }
            className="w-full h-[22rem] mb-4 p-2 border rounded placeholder:border-opacity-60"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-44"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublishStory;
