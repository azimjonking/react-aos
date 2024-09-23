import React from "react";
import "./Home.css";
import { FaChevronDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="home">
      <h1>AOS</h1>
      <p>Animate On Scroll Library</p>
      <a>
        <span>Scroll down</span>
        <FaChevronDown />
      </a>
    </div>
  );
};

export default Home;
