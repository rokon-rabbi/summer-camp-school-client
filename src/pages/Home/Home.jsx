
import React from 'react';
import Slider from './Slider/Slider';
import Timer from './Timer/Timer';
import PopularClass from './popularClass/PopularClass';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Timer></Timer>
           <PopularClass></PopularClass>
        </div>
    );
};

export default Home;