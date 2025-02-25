import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

export function Todos() {
  const { todos, loading } = useFetchTodos();
  if (loading) {
    return (
      <div className="text-center">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <ul className="list-disc pl-5 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="bg-white p-4 rounded shadow">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sample Hook
export function useFetchTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    setTodos(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return { todos, loading };
}

// If you are creating a React application, consider using TanStack Query or TanStack Router for state management and routing.
