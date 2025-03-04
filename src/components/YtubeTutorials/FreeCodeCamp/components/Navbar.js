import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);
  return (
    <nav className="bg-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-gray-900 text-3xl font-bold">
          <NavLink to={"/"}>Food Recipe</NavLink>
        </h2>

        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
            placeholder="Search recipes..."
            className="p-2 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <button className="bg-gray-900 text-white p-2 rounded-r-md hover:bg-gray-700 transition duration-300">
            Search
          </button>
        </form>

        <ul className="flex space-x-6">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-600 hover:text-gray-900 transition duration-300"
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
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-600 hover:text-gray-900 transition duration-300"
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-600 hover:text-gray-900 transition duration-300"
              }
            >
              Orders
            </NavLink> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
