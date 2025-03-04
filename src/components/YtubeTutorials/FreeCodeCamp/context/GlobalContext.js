import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalProvider({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParams("");
    }
  }

  function addToFavorites(currentRecipe) {
    console.log("currentRecipe: ", currentRecipe);
    let favoriteList = [...favoritesList];
    const index = favoriteList.findIndex(
      (recipe) => recipe.id === currentRecipe.id
    );
    if (index === -1) {
      favoriteList = [...favoriteList, currentRecipe];
    } else {
      favoriteList.splice(index, 1);
    }
    setFavoritesList(favoriteList);
  }

  console.log(loading, recipeList);
  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        addToFavorites,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
