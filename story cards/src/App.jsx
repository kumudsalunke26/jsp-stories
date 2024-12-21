
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublishStory from "./pages/PublishStory";
import Header from "./components/Header";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";

const App = () => {
  const [stories, setStories] = useState([]);

  const addStory = (newStory) => {
    setStories((prevStories) => [...prevStories, newStory]);
  };

  return (
    <div className="bg-black ">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Stories stories={stories} />} />
          <Route path="/publish" element={<PublishStory addStory={addStory} />} />
          <Route path="/story-detail" element={<StoryDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
