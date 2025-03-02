import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export function Parent() {
  const [username, setUserName] = useState("Lenard");
  const [count, setCount] = useState(0);

  const handleSetUserName = (e) => {
    setUserName(e.target.value);
  };
  return (
    <AppContext.Provider
      value={{ username, setUserName, handleSetUserName, count, setCount }}
    >
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <div className="text-xl font-bold mb-4">{username}</div>
          <Child1 />
          <Child2 />
          <Child3 />
          <Child4 />
          <Grandchild />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export const Child1 = () => {
  const { username } = useContext(AppContext);
  return <h1>{username}</h1>;
};

export const Child2 = () => {
  const { username, handleSetUserName } = useContext(AppContext);

  return (
    <input
      type="text"
      onChange={handleSetUserName}
      value={username}
      className="border border-gray-300 p-2 rounded-lg mb-4"
      placeholder="Enter username"
    />
  );
};

export const Child3 = () => {
  const { count } = useContext(AppContext);
  return <h1>{count}</h1>;
};

export const Child4 = () => {
  const { count, setCount } = useContext(AppContext);
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={() => setCount(count + 1)}
    >
      Increment
    </button>
  );
};

export const Grandchild = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setUserName("Fish")}
      >
        Set Username
      </button>
    </div>
  );
};
