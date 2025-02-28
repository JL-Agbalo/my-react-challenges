import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ChallengeCard from "./components/ChallengeCard";
import challenges from "./data/challenges";
import Challenge1 from "./components/Challenge/Challenge1";
import Challenge2 from "./components/Challenge/Challenge2";
import Challenge3 from "./components/Challenge/Challenge3";
import Challenge4 from "./components/Challenge/Challenge4";
import Challenge5 from "./components/Challenge/Challenge5";
import Challenge6 from "./components/Challenge/Challenge6";
import UnoptimizedMovieApp from "./components/ReactHooks/UnoptimizedMovieApp";
import OptimizedMovieApp from "./components/ReactHooks/OptimizedMovieApp";
import { Fruits } from "./components/ReactHooks/Fruits";
import { Todos } from "./components/ReactHooks/Todos";
import { SampleComponent } from "./components/ButtonsWithoutRef";
import { CForm } from "./components/ReactHooks/CForm";
import { UCForm } from "./components/ReactHooks/UCForm";
import Home from "./components/ToDo/Home";
import TodoList from "./components/ToDo/TodoList";
import WDSuseRef from "./components/YtubeTutorials/UseRef/WDSuseRef";
import GPTCountRef from "./components/YtubeTutorials/UseRef/GPTCountRef";
import ShoppingCart from "./components/YtubeTutorials/UseReducer/ShoppingCart";
function App() {
  useEffect(() => {
    console.log(`PORT=${process.env.REACT_APP_PORT}`);
    console.log(`TEST=${process.env.REACT_APP_TEST}`);
  }, []);

  return (
    // <div>
    //   <ShoppingCart />
    //   <UnoptimizedMovieApp />
    //   <OptimizedMovieApp />
    //   <UCForm />
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/todolist" element={<TodoList />} />
    //     </Routes>
    //   </Router>
    //   <GPTCountRef />
    // </div>

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
            {challenge.id === 3 && <Challenge3 />}
            {challenge.id === 4 && <Challenge4 />}
            {challenge.id === 5 && <Challenge5 />}
            {challenge.id === 6 && <Challenge6 />}
          </ChallengeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
