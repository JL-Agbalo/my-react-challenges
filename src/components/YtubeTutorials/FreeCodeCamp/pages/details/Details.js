import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

function Details() {
  const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);
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

  return <div>RECIPENG MALOWPET</div>;
}

export default Details;
