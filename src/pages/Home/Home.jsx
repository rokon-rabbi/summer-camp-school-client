
import React from 'react';
import Slider from './Slider/Slider';
import Timer from './Timer/Timer';
import PopularClass from './popularClass/PopularClass';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <p className="md:text-5xl mb-2 p-2 bg-zinc-50 underline decoration-wavy decoration-cyan-300 text-3xl font-extrabold text-gray-900 text-center mt-14 py-10 md:mt-12">
          Popular Classes
        </p>
           <PopularClass></PopularClass>
          
           <Timer></Timer>
        </div>
    );
};

export default Home;