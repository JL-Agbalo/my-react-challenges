import React, { useRef, useState } from "react";

function WDSuseRef() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  console.log("renders: ", renders);
  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    clearInterval(timerId.current);
  };

  const resetTimer = () => {
    clearInterval(timerId.current);
    renders.current++;
    setSeconds(0);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          value={randomInput}
          onChange={handleChange}
          placeholder="Random Input"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <h1 className="text-xl font-semibold">
          My random input: {randomInput}
        </h1>
        <h2 className="text-lg font-semibold">Renders: {renders.current}</h2>
        <h2 className="text-lg font-semibold">Seconds: {seconds}</h2>
        <div className="mt-4 space-x-2">
          <button
            onClick={startTimer}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default WDSuseRef;
