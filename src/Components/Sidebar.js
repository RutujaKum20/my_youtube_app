import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;

  // return !isMenuOpen ? null : ()
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li>Subscriptions</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
