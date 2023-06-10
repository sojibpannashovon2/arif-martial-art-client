import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/home/logo.svg'
const Navbar = () => {
    const user = false;
    const navbarLink = <>

        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to="/instructors">Instructor</Link>
        </li>
        <li>
            <Link to='/classes'>Classes</Link>
        </li>
        {
            user ? <>
                <li>   <Link>DashBoard</Link></li>
                <li>    <button>Profile</button></li>
            </> : <>
                <li><Link to='/login'>LogIn</Link></li>
            </>
        }


    </>

    return (


        <div className="navbar bg-base-100 border-2 border-white rounded-xl shadow-lg fixed z-10 max-w-6xl bg-opacity-30  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarLink}
                    </ul>
                </div>



                <a className="btn btn-ghost normal-case text-3xl font-bold text-pink-500 ">
                    <img className='w-12 h-12  rounded-full ring ring-white ring-offset-base-100 ring-offset-2' src={logo} alt="" />
                    Arif's Martial Art House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  text-md text-white">
                    {navbarLink}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link className="btn btn-outline btn-primary">LogIn</Link>

            </div> */}
        </div>


    );
};

export default Navbar;