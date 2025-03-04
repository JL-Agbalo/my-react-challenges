import React from "react";
import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  console.log("recipe", recipe);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 m-4 flex flex-col justify-between">
      <img
        className="w-full h-48 object-cover"
        src={recipe.image_url}
        alt={recipe.title}
      />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2 text-gray-900 truncate">
          {recipe.title}
        </div>
        <p className="text-gray-700 text-base mb-4">
          Publisher: {recipe.publisher}
        </p>
        <p className="text-gray-600 text-sm">{recipe.description}</p>
      </div>
      <div className="px-6 pt-4 pb-6 flex justify-between items-center">
        <Link
          to={`/recipe-item/${recipe.id}`}
          className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
