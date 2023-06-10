import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../component/pages/Home/home/Home";
import ErrorPage from "../component/pages/shared/ErrorPage";
import Register from "../component/pages/logs/Register";
import LogIn from "../component/pages/logs/LogIn";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ],

    },
]);

export default router;