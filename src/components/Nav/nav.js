import React from "react";
import logo from "../../images/logo.svg";

const Nav = ({ handleSubmit, handleChange, search }) => {
  return (
    <div className="nav-bar">
      <div>
        <img src={logo} alt="Timescale" className="logo" />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="search-box"
            type="text"
            id="search"
            placeholder=" Search for a movie"
            onChange={handleChange}
            value={search}
          />
        </form>
      </div>
    </div>
  );
};

export default Nav;
