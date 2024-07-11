
import React from "react";
import image from "../assets/logo-best-movie.png";

const Header = () => {

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center gap-3 mt-4 ">
      <div className="d-flex justify-content-center">
        <img className="w-75" src={image} alt="nba-logo" />
      </div>
      <h1 id="haupt-title" className="display-2 text-light fw-semibold">The Best MOVIES</h1>

     
       
      
    </div>
  );
};

export default Header;
