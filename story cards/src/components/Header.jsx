

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false); // State to control the menu visibility
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Toggle the visibility of the menu
  };

  const handleOptionClick = () => {
    setMenuVisible(false); // Hide the menu when an option is clicked
  };

  const handlePublishClick = () => {
    setMenuVisible(false); // Hide the menu when the publish button is clicked
    navigate("/publish"); // Navigate to the publish story page
  };

  return (
    <div className="bg-black flex items-center justify-between p-4">
      {/* Logo */}
      <img className="h-20" src={logo} alt="Logo" />

      {/* Hamburger Icon (☰) */}
      <div className="lg:hidden cursor-pointer text-white text-3xl" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links (for mobile and desktop) */}
      <div
        className={`${
          menuVisible ? "block" : "hidden"
        } absolute top-[8rem] left-0 right-0 bg-black text-center lg:flex lg:space-x-8 lg:items-center lg:relative lg:top-0 `}
      >
        <p
          onClick={() => {
            navigate("/");
            handleOptionClick();
          }}
          className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
        >
          Home
        </p>
        <p
          onClick={() => {
            navigate("/episodes");
            handleOptionClick();
          }}
          className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
        >
          Episodes
        </p>
        <p
          onClick={() => {
            navigate("/blogs");
            handleOptionClick();
          }}
          className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
        >
          Blogs
        </p>
        <p
          onClick={() => {
            navigate("/");
            handleOptionClick();
          }}
          className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
        >
          Stories
        </p>
        <p
          onClick={() => {
            navigate("/about-us");
            handleOptionClick();
          }}
          className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
        >
          About Us
        </p>
        <p
          onClick={() => {
            navigate("/team");
            handleOptionClick();
          }}
          className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
        >
          Team
        </p>
        <p
          onClick={() => {
            navigate("/reviews");
            handleOptionClick();
          }}
          className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
        >
          Reviews
        </p>
        <p
          onClick={() => {
            navigate("/contact");
            handleOptionClick();
          }}
          className="text-gray-300 font-semibold text-[1.5rem] cursor-pointer"
        >
          Contact Us
        </p>

        {/* Publish a Story Button */}
        <button
          onClick={handlePublishClick}
          className="text-gray-300 bg-blue-600 font-semibold text-[1.3rem] cursor-pointer w-[12rem] rounded-md h-11"
        >
          Publish a Story
        </button>
      </div>
    </div>
  );
};

export default Header;
