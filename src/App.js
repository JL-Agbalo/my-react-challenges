import React from "react";
import "./App.css";
import ChallengeCard from "./components/ChallengeCard";
import challenges from "./data/challenges";
import Challenge1 from "./components/Challenge/Challenge1";
import Challenge2 from "./components/Challenge/Challenge2";
import Challenge3 from "./components/Challenge/Challenge3";
import Challenge4 from "./components/Challenge/Challenge4";
import UnoptimizedMovieApp from "./components/ReactHooks/UnoptimizedMovieApp";
import OptimizedMovieApp from "./components/ReactHooks/OptimizedMovieApp";
import { Fruits } from "./components/ReactHooks/Fruits";
import { Todos } from "./components/ReactHooks/Todos";
import { SampleComponent } from "./components/ButtonsWithoutRef";
function App() {
  return (
    <div>
      {/* <UnoptimizedMovieApp /> */}
      {/* <OptimizedMovieApp /> */}
      <SampleComponent />
    </div>

    // <div className="App bg-gray-900 min-h-screen p-8">
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     {challenges.map((challenge) => (
    //       <ChallengeCard
    //         key={challenge.id}
    //         title={challenge.title}
    //         description={challenge.description}
    //         difficulty={challenge.difficulty}
    //         category={challenge.category}
    //       >
    //         {challenge.id === 1 && <Challenge1 />}
    //         {challenge.id === 2 && <Challenge2 />}
    //         {challenge.id === 3 && <Challenge3 />}
    //         {challenge.id === 4 && <Challenge4 />}
    //       </ChallengeCard>
    //     ))}
    //   </div>
    // </div>
  );
}

export default App;
