import React from 'react';
import logo from '../../../assets/images/home/logo.svg'
import { FaFacebook, FaYoutube, FaGithub } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-neutral-content mt-8 flex justify-evenly items-center ">
            <div>
                <img className='w-64 h-64' src={logo} alt="" />
            </div>
            <div>
                <span className="footer-title">Our Contact Option</span>
                <div className="grid grid-flow-col gap-4">

                    <a href="https://www.facebook.com/arifur.rahmansojib.7">
                        <FaFacebook className='w-8 h-8'></FaFacebook>

                    </a>



                    <a href="https://www.youtube.com/channel/UCIUfEtViFNKiD3VRDqFPQXA">
                        <FaYoutube className='w-8 h-8'></FaYoutube>
                    </a>



                    <a href="https://github.com/sojibpannashovon2">
                        <FaGithub className='w-8 h-8'></FaGithub>
                    </a>


                </div>

                <div>
                    <p>Copyright © 2023 - All right reserved by Arif's Martial Art House</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;