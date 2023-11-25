import React from "react";
import { Link } from "react-router-dom";

const AnimeListItem = ({ animeData }) => {
  const {
    mal_id,
    title,
    title_japanese,
    year,
    score,
    members,
    popularity,
    genres,
    images,
  } = animeData;

  return (
    <Link to={`/details/${mal_id}`}>
      <div className="anime-list-item border border-gray-300 rounded-md p-4 mb-4 hover:shadow-md transition duration-300">
        <div>
          <img src={images.jpg.image_url} alt="" />
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <h3 className="text-gray-600 mb-2">{title_japanese}</h3>
        <h4 className="text-gray-600 mb-2">{year}</h4>
        <p className="text-yellow-500 font-bold mb-2">{score}</p>
        <p className="text-gray-600 mb-2">{members} Members</p>
        <p className="text-gray-600 mb-2">Popularity: #{popularity}</p>
        <div>
          {genres.map((genre) => (
            <span
              key={genre.name}
              className="inline-block bg-gray-200 text-gray-800 px-2 py-1 mr-2 mb-2 rounded-full"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default AnimeListItem;
