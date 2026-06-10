import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import About from "../components/About/About";
import Carrer from "../components/Carrer/Carrer";
import newRoot from "../components/newRoot/newRoot";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/news.json"),
        Component: Home
      },

      {
        path: "about",
        Component: About
      },
      {
        path: "career",
        Component: Carrer
      },
    ],
  },
  {
    Component: newRoot,
    children: [
      {
        path: "newsDetails/:id",
        loader: () => fetch("/news.json"),
        Component: NewsDetails
      },
    ],
  },

]);
