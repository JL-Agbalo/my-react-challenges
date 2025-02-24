import React, { useMemo } from "react";

export default function OptimizedMovieApp() {
  const [count, setCount] = React.useState(0);
  const [movies, setMovies] = React.useState([
    { id: 1, title: "Inception", rating: 8.8, reviews: 1200 },
    { id: 2, title: "Interstellar", rating: 8.6, reviews: 1100 },
  ]);

  const calculateMovieScore = (rating, reviews) => {
    console.log("Calculating movie score for: ", rating, reviews);
    for (let i = 0; i < 1000000000; i++) {}
    return (rating * reviews) / 10;
  };

  const handleLike = () => {
    console.log("Liked movie: ", movies[0].title);
  };

  const movieScore = useMemo(
    () => calculateMovieScore(movies[0].rating, movies[0].reviews),
    [movies]
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Optimized Movie App</h1>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-4"
      >
        Clicked {count} times
      </button>

      <p className="mb-4">Movie Score: {movieScore}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            movieScore={movieScore}
            onLike={() => handleLike(movie)}
          />
        ))}
      </div>
    </div>
  );
}

const Movie = React.memo(({ movie, onLike, movieScore }) => {
  console.log("Rendering movie: ", movie.title);
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
      <p className="mb-2">Rating: {movie.rating}</p>
      <p className="mb-2">Reviews: {movie.reviews}</p>
      <p className="mb-2">Score: {movieScore}</p>
      <button
        onClick={onLike}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Like
      </button>
    </div>
  );
});
