import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
    FaShoppingCart,
    FaWallet,
    FaHome,
    FaCalendar,
    FaShoppingBag,
    FaThList,
    FaUserFriends,
    FaBook,
    FaThLarge,
    FaSearchLocation,
    FaBoxOpen,
    FaShopify,
    FaAlignJustify,
    FaUserAlt

} from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {

    // TODO: load data from server to create dynamic admin
    // const [role] = useAdmin();
    const role = 'instructor'

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* drawer content wil be here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-sky-500 to-indigo-500 text-black">
                    {/* Sidebar content here */}
                    <h1 className='my-5 text-4xl font-bold flex'>Arif's Martial Art House
                        <FaShopify className='w-12'></FaShopify>
                    </h1>



                    {
                        role === 'admin' ?
                            <>
                                <h1 className='text-2xl font-bold text-warning'>Admin pannel</h1>
                                <li>
                                    <Link to='/dashboard/mycart'>
                                        <FaWallet></FaWallet>
                                        Manage classes
                                    </Link>
                                </li>
                                <li>

                                    <Link to="/dashboard/alluser">
                                        <FaUserAlt></FaUserAlt>
                                        Manage users</Link>
                                </li>
                            </>
                            : role === 'instructor' ?
                                <>
                                    <h1 className='text-2xl font-bold text-warning'>Instructor pannel</h1>
                                    <li>
                                        <Link to='/dashboard/addclass'>
                                            <FaShoppingBag></FaShoppingBag>
                                            Add a clases
                                        </Link>
                                    </li>
                                    <li>

                                        <Link>
                                            <FaThList></FaThList>
                                            My Class</Link>
                                    </li>
                                </> : <>
                                    <h1 className='text-2xl font-bold text-warning'>User pannel</h1>
                                    <li>
                                        <Link to='/dashboard/mycart'>
                                            <FaSearchLocation></FaSearchLocation>
                                            My Selected Class
                                        </Link>
                                    </li>
                                    <li>

                                        <Link>
                                            <FaBoxOpen></FaBoxOpen>
                                            My Enrolled Class</Link>
                                    </li>

                                </>
                    }


                    <hr className='my-5' />
                    <li>
                        <Link to='/'>
                            <FaHome></FaHome>
                            User Home
                        </Link>
                    </li>
                    <li>

                        <Link to='/classes'>
                            <FaAlignJustify></FaAlignJustify>
                            All Classes</Link>
                    </li>
                    <li>

                        <Link to='/instructors'>
                            <FaUserFriends></FaUserFriends>
                            All Instructor</Link>
                    </li>

                </ul>

            </div>
        </div>
    );

};

export default Dashboard;