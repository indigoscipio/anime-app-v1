import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    getAnimeFullById: builder.query({
      query: (id) => `/anime/${id}/full`,
    }),
    getTopAnime: builder.query({
      query: () => `/top/anime`,
    }),
    getRandomAnime: builder.query({
      query: () => `/random/anime`,
    }),
    searchAnime: builder.query({
      query: (query) => `/anime?q=${query}`,
    }),
  }),
});

export const {
  useGetAnimeFullByIdQuery,
  useGetRandomAnimeQuery,
  useGetTopAnimeQuery,
  useSearchAnimeQuery,
} = animeApi;
