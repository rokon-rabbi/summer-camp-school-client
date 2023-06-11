import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import Timer from "./Timer/Timer";
import PopularClass from "./popularClass/PopularClass";
import PopularInstructor from "./popularInstructor/PopularInstructor";
import Video from "./Extrasection/Video";
import Switcher from "./Switcher";

const Home = () => {
  

  return (
    <div >
      <div className="form-control fixed z-50 right-0">
        <Switcher></Switcher>
      </div>
      <Slider />
      <p className="md:text-5xl mb-2 p-2 bg-zinc-50 underline decoration-wavy decoration-cyan-300 text-3xl font-extrabold text-gray-900 text-center mt-14 py-10 md:mt-12">
        Popular Classes
      </p>
      <PopularClass />
      <p className="md:text-5xl mb-2 p-2 bg-zinc-50 underline decoration-wavy decoration-cyan-300 text-3xl font-extrabold text-gray-900 text-center mt-14 py-10 md:mt-12">
        Popular Instructors
      </p>
      <PopularInstructor />
      <Timer />
      <Video />
    </div>
  );
};

export default Home;
