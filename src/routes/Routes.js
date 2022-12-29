import { createBrowserRouter } from "react-router-dom";
import About from "../pages/Home/About/About";
import Error from "../pages/Home/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/LoginSystem/Login";
import Signup from "../pages/Home/LoginSystem/Signup";
import Media from "../pages/Home/Media/Media";
import Message from "../pages/Home/Message/Message";
import PostDetails from "../pages/Home/PostDetails/PostDetails";
import Main from "../pages/layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/media",
        element: (
          <PrivateRoute>
            <Media></Media>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/message",
        element: (
          <PrivateRoute>
            <Message></Message>
          </PrivateRoute>
        ),
      },
      {
        path: "/post/:id",

        loader: ({ params }) =>
          fetch(`https://devplatform-server.vercel.app/post/${params.id}`),
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);


export default router;