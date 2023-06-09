import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../component/pages/Home/home/Home";
import ErrorPage from "../component/pages/shared/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ],

    },
]);

export default router;