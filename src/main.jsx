import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import PageToRead from "./Components/PageToRead/PageToRead";
import BookDetails from "./Components/BookDetails/BookDetails";
import Error from "./Components/Error/Error";
import ReadBooks from "./Components/ListedBooks/ReadBooks/ReadBooks";
import Wishlists from "./Components/ListedBooks/Wishlists/Wishlists";
import Help from "./Components/Help/Help";
import NewBooks from "./Components/NewBooks/NewBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        loader: () => fetch("./books.json"),
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/listedBooks",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlists",
            element: <Wishlists></Wishlists>,
          },
        ],
      },
      {
        path: "/pageToRead",
        loader: () => fetch("./books.json"),
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("./books.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/newBooks",
        loader: () => fetch("./books.json"),
        element: <NewBooks></NewBooks>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
