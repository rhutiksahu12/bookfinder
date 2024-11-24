import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Favorites from "../pages/Favorites";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/favorites",
        element: <Favorites />,
    }
    // {
    //     path:'/',
    //     element: (
    //         <div>
    //             Home Page
    //         </div>
    //     )
    // }
])