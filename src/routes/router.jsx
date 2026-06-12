import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import About from "../components/About/About";
import Carrer from "../components/Carrer/Carrer";
import newRoot from "../components/newRoot/newRoot";
import AuthRoot from "../components/AuthRoot/AuthRoot";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "about",
        Component: About,
      },
      {
        path: "career",
        element: (
          <PrivateRoutes>
            <Carrer></Carrer>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    Component: newRoot,
    children: [
      {
        path: "newsDetails/:id",
        loader: () => fetch("/news.json"),
        Component: NewsDetails,
      },
    ],
  },
  {
    Component: AuthRoot,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      },
    ],
  },
]);
