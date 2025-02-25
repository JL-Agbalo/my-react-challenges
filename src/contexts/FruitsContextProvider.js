import { useState, useContext, createContext } from "react";

export const FruitsContext = createContext({
  fruits: [],
  addFruit: (fruit) => {},
  removeFruit: (fruit) => {},
  updateFruit: (fruit) => {},
  getFruit: (fruit) => undefined,
});

export const FruitsContextProvider = ({ children }) => {
  const [fruits, setFruits] = useState([]);

  const addFruit = (fruit) => {
    setFruits((prevFruits) => [...prevFruits, fruit]);
  };

  const removeFruit = (fruit) => {
    setFruits((prevFruits) => prevFruits.filter((f) => f !== fruit));
  };

  const updateFruit = (updatedFruit) => {
    setFruits((prevFruits) =>
      prevFruits.map((fruit) =>
        fruit === updatedFruit.old ? updatedFruit.new : fruit
      )
    );
  };

  const getFruit = (fruit) => {
    return fruits.find((f) => f === fruit);
  };

  const contextValue = {
    fruits,
    addFruit,
    removeFruit,
    updateFruit,
    getFruit,
  };

  return (
    <FruitsContext.Provider value={contextValue}>
      {children}
    </FruitsContext.Provider>
  );
};

export function useFruitsContext() {
  return useContext(FruitsContext);
}
