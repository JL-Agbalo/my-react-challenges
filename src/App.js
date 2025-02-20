import React from "react";
import "./App.css";
import ChallengeCard from "./components/ChallengeCard";
import Challenge1 from "./components/Challenge/Challenge1";
import Challenge2 from "./components/Challenge/Challenge2";
import challenges from "./data/challenges";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            difficulty={challenge.difficulty}
            category={challenge.category}
          >
            {challenge.id === 1 && <Challenge1 />}
            {challenge.id === 2 && <Challenge2 />}
          </ChallengeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
