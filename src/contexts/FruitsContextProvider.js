import { useState, useContext, createContext } from "react"; // Import hooks and createContext

export const FruitsContext = createContext({
  fruits: [], // Initial fruits array
  addFruit: (fruit) => {}, // Placeholder for addFruit function
  removeFruit: (fruit) => {}, // Placeholder for removeFruit function
  updateFruit: (fruit) => {}, // Placeholder for updateFruit function
  getFruit: (fruit) => undefined, // Placeholder for getFruit function
});

export const FruitsContextProvider = ({ children }) => {
  const [fruits, setFruits] = useState([]); // State to store fruits

  const addFruit = (fruit) => {
    setFruits((prevFruits) => [...prevFruits, fruit]); // Add new fruit to the list
  };

  const removeFruit = (fruit) => {
    setFruits((prevFruits) => prevFruits.filter((f) => f !== fruit)); // Remove fruit from the list
  };

  const updateFruit = (updatedFruit) => {
    setFruits((prevFruits) =>
      prevFruits.map(
        (fruit) => (fruit === updatedFruit.old ? updatedFruit.new : fruit) // Update fruit in the list
      )
    );
  };

  const getFruit = (fruit) => {
    return fruits.find((f) => f === fruit); // Find and return the fruit
  };

  const contextValue = {
    fruits, // Current fruits array
    addFruit, // Function to add fruit
    removeFruit, // Function to remove fruit
    updateFruit, // Function to update fruit
    getFruit, // Function to get a specific fruit
  };

  return (
    <FruitsContext.Provider value={contextValue}>
      {" "}
      {/* Provide context value */}
      {children} {/* Render children components */}
    </FruitsContext.Provider>
  );
};

export function useFruitsContext() {
  return useContext(FruitsContext); // Custom hook to use FruitsContext
}
