

import React from "react";

const StoryCards = ({ story, onView }) => {
  return (
    <div
      className="relative bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer w-full mx-auto mb-6"
      onClick={() => onView(story)} // Trigger onView with the story data
    >
      {/* Story Image */}
      {story.imageUrl && (
        <img
          src={story.imageUrl}
          alt="Story"
          className="w-full h-[20rem] object-cover"
        />
      )}

      {/* Badge */}
      <div className="w-[7rem] absolute top-72 left-4 bg-white py-1 px-3 rounded-full shadow-lg">
        <span className="text-black font-semibold text-sm">JourneyStory</span>
      </div>

      {/* Story Headline and Content */}
      <div className="relative p-4">
        {/* Story Headline */}
        {story.headline && (
          <h2 className="text-xl font-bold text-white h-[3rem] pt-4">
            {story.headline}
          </h2>
        )}
        {/* Story Content Preview */}
        {story.content && (
          <p className="text-gray-300 mt-2">{story.content.slice(0, 100)}...</p>
        )}
      </div>
    </div>
  );
};

export default StoryCards;
