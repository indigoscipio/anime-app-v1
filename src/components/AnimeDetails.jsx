import React from "react";
import { useParams } from "react-router-dom";
import { useGetAnimeFullByIdQuery } from "../api/api";

const AnimeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetAnimeFullByIdQuery(id);

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

  // Possibly set default value
  const { synopsis, title, title_japanese, images, genres } = data.data;

  return (
    <div className="container mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <div>
        <img src={images.jpg.image_url} alt="" />
      </div>
      <p className="text-gray-600">MAL id: {id}</p>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <h3 className="text-xl mb-2">{title_japanese}</h3>
      <p className="text-gray-800">{synopsis}</p>
    </div>
  );
};

export default AnimeDetails;
