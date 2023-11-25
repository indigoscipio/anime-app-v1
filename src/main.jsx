import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnimeDetails from "./components/AnimeDetails.jsx";
import HomePage from "./components/HomePage.jsx";
import RandomAnimePage from "./components/RandomAnimePage.jsx";
import SearchAnimePage from "./components/SearchAnimePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // This route will match the home page
        index: true,
        element: <HomePage />,
      },
      {
        path: "/details/:id",
        element: <AnimeDetails />,
      },
      {
        path: "/random",
        element: <RandomAnimePage />,
      },
      {
        path: "/search",
        element: <SearchAnimePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
