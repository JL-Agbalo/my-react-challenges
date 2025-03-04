import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeItem from "../recipe-item/RecipeItem";

function FavoritesList() {
  const { favoritesList } = useContext(GlobalContext);

  if (favoritesList.length === 0) {
    return <div className="text-center mt-10">No favorites added yet.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Favorite Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritesList.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesList;
