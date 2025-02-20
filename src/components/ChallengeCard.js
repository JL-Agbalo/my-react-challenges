import React from "react";

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "easy":
      return "text-green-500";
    case "medium":
      return "text-yellow-500";
    case "hard":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const ChallengeCard = ({
  title,
  description,
  difficulty,
  category,
  children,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 h-80 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className={`text-sm mb-2 ${getDifficultyColor(difficulty)}`}>
          Difficulty: {difficulty}
        </p>
        <p className="text-sm text-gray-500 mb-4">Category: {category}</p>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default ChallengeCard;
