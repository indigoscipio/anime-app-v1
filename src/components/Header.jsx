import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link className="inline-block" to="/">
        <h2 className="text-2xl font-bold">MYANIME</h2>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Top Animes
          </Link>
        </li>
        <li>
          <Link to="/random" className="hover:text-gray-300">
            Randomizer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
