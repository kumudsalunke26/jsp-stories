

import React from "react";
import { useNavigate } from "react-router-dom";
import StoryCards from "../components/StoryCards";

const Stories = ({ stories }) => {
  const navigate = useNavigate();

  const viewStory = (story) => {
    navigate("/story-detail", { state: story });
  };

  return (
    <div className="bg-black min-h-screen p-8">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center text-[3rem]">
        Stories
      </h2>

      {/* Render Stories or Show Message */}
      {stories && stories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 py-10">
          {stories.map((story, index) => (
            <StoryCards key={index} story={story} onView={viewStory} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center text-[1.8rem]">
          No stories published yet.
        </p>
      )}
    </div>
  );
};

export default Stories;


