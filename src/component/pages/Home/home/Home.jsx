import React from 'react';
import Banner from './Banner';
import Slider from './Slider';
import PopularClass from './PopularClass';
import Instructor from './Instructor';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;