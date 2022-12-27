import { createBrowserRouter } from "react-router-dom";
import About from "../pages/Home/About/About";
import Home from "../pages/Home/Home/Home";
import Media from "../pages/Home/Media/Media";
import Message from "../pages/Home/Message/Message";
import Main from "../pages/layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/media',
                element: <Media></Media>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/message',
                element: <Message></Message>
            },
        ]
        
    }
]);


export default router;