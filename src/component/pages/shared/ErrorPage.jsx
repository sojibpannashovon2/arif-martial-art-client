import React from 'react';
import Lottie from "lottie-react";
import error from "../../../assets/images/error/error.json";
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <Lottie className='h-fit w-fit mx-auto' animationData={error}></Lottie>
            <div className='text-center'>
                <Link to='/' className="btn btn-outline">
                    Back To Home
                </Link>

            </div>
        </div>
    );
};

export default ErrorPage;