import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

function Details() {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    addToFavorites,
    favoritesList,
  } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipeDetailsData(data.data.recipe);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
      }
    }
    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  if (!recipeDetailsData) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const { title, publisher, image_url, ingredients, servings, cooking_time } =
    recipeDetailsData;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={image_url}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700 mb-4">By {publisher}</p>
            <p className="text-gray-700 mb-4">
              <strong>Servings:</strong> {servings}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cooking Time:</strong> {cooking_time} minutes
            </p>
            <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">
                  {ingredient.quantity} {ingredient.unit}{" "}
                  {ingredient.description}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => addToFavorites(recipeDetailsData)}
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 mt-4 md:mt-0"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.some((item) => item.id === id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
