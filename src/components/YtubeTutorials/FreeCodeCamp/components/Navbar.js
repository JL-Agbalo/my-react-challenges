import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);
  return (
    <div className="bg-blue-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold">
          <NavLink to={"/"}>Food Recipe</NavLink>
        </h2>

        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
            placeholder="Enter Item"
            className="p-2 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-yellow-500 text-white p-2 rounded-r-md hover:bg-yellow-600 transition duration-300">
            Search
          </button>
        </form>

        <ul className="flex space-x-4">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-white hover:text-gray-400 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-white hover:text-gray-400 transition duration-300"
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-white hover:text-gray-400 transition duration-300"
              }
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
