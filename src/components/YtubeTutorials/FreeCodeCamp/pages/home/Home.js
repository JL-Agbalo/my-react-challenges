import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  return (
    <div>
      <h1>Home</h1>
      {loading && <h1>Loading...</h1>}
      {recipeList.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
}

export default Home;

// https://youtu.be/5ZdHfJVAY-s?t=22640
// Continue
