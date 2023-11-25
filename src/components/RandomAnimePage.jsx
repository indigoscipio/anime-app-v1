import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetRandomAnimeQuery } from "../api/api";

const RandomAnimePage = () => {
  const { data, isLoading, error, refetch } = useGetRandomAnimeQuery();
  const [randomizing, setRandomizing] = useState(false);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-8 text-red-600">
        Error: {error.message}
      </div>
    );
  }

  const { title_english, title_japanese, synopsis } = data.data;

  const handleRandomize = async () => {
    try {
      setRandomizing(true);

      await refetch();
    } catch (error) {
      console.error("Error fetching random anime:", error);
    } finally {
      setRandomizing(false);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Random Anime Generator</h1>

      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">
          {title_english || "No English Title Available"}
        </h2>
        <h3 className="text-gray-600 mb-4">{title_japanese}</h3>
        <p className="text-gray-800">{synopsis}</p>
        <button
          onClick={handleRandomize}
          disabled={randomizing}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        >
          {randomizing ? "Randomizing... ⌛" : "Randomize! 🎲"}
        </button>
      </div>
    </div>
  );
};

export default RandomAnimePage;
