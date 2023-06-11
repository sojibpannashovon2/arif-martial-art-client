import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../component/pages/Home/home/Home";
import ErrorPage from "../component/pages/shared/ErrorPage";
import Register from "../component/pages/logs/Register";
import LogIn from "../component/pages/logs/LogIn";
import Classes from "../component/pages/classes/Classes";

import Instructors from "../component/pages/Instructor/Instructors";

import PrivateRoute from "./PrivateRoute";
import MyCart from "../component/dashboard/User/MyCart";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../component/dashboard/Admin/AllUsers";


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
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
            },
        ],

    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "mycart",
                element: <MyCart></MyCart>
            },
            {
                path: "alluser",
                element: <AllUsers></AllUsers>
            },
        ]
    }
]);

export default router;