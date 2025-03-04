import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeItem from "../recipe-item/RecipeItem";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  console.log("recipeList", recipeList);
  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Recipe Finder
      </h1>
      {loading && (
        <h1 className="text-xl text-gray-900 text-center">Loading...</h1>
      )}
      {!loading && recipeList.length === 0 && (
        <h1 className="text-xl text-red-500 text-center">
          Nothing to Show. Please Search something.
        </h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipeList.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
