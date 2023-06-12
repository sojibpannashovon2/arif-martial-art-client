import React from 'react';
import Banner from './Banner';
import Slider from './Slider';
import PopularClass from './PopularClass';
import Instructor from './Instructor';
import { Fade } from "react-awesome-reveal";

// function App() {
//   return (

//   );
// }

const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Fade>
                <p className='text-white text-4xl'>I am an animated text</p>
            </Fade>
            <Fade cascade>
                <p>I enter first...</p>
                <p>...then comes my turn...</p>
                <p>...and finally you see me!</p>
            </Fade>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;