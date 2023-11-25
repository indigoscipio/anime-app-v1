import React, { useState } from "react";
import { useGetTopAnimeQuery } from "../api/api";
import AnimeListItem from "./AnimeListItem";

const AnimeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;

  const {
    data: topAnimes,
    isLoading,
    error,
  } = useGetTopAnimeQuery({
    page: 1,
    limit: itemsPerPage * 5,
  });

  const slicedTopAnimes = topAnimes
    ? topAnimes.data.slice(startIndex, startIndex + itemsPerPage)
    : [];

  const totalPages = Math.ceil(topAnimes?.data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100 rounded-md">
      {isLoading && <p className="text-center text-gray-600">Loading...</p>}
      {error && (
        <p className="text-center text-red-600">Error: {error.message}</p>
      )}

      {slicedTopAnimes && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slicedTopAnimes.map((animeData) => (
            <AnimeListItem key={animeData.mal_id} animeData={animeData} />
          ))}
        </div>
      )}

      {topAnimes && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Previous Page
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimeList;
