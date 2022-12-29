import { createBrowserRouter } from "react-router-dom";
import About from "../pages/Home/About/About";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/LoginSystem/Login";
import Signup from "../pages/Home/LoginSystem/Signup";
import Media from "../pages/Home/Media/Media";
import Message from "../pages/Home/Message/Message";
import Main from "../pages/layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/message",
        element: <Message></Message>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      
    ],
  },
]);


export default router;