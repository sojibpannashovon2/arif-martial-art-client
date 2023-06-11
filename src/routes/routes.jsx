import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../component/pages/Home/home/Home";
import ErrorPage from "../component/pages/shared/ErrorPage";
import Register from "../component/pages/logs/Register";
import LogIn from "../component/pages/logs/LogIn";
import Classes from "../component/pages/classes/Classes";
import Instructor from "../component/pages/Home/home/Instructor";
import Instructors from "../component/pages/Instructor/Instructors";
import Dashboard from "../component/dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";


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
            {
                path: 'classes',
                element: <PrivateRoute><Classes></Classes></PrivateRoute>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
        ],

    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

        ]
    }
]);

export default router;