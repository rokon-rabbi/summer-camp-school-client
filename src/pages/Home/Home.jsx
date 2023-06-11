import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import Timer from "./Timer/Timer";
import PopularClass from "./popularClass/PopularClass";
import PopularInstructor from "./popularInstructor/PopularInstructor";
import Video from "./Extrasection/Video";

import moon from'../../assets/moon.png'
import sun from'../../assets/sun.png'
const Home = () => {
   // use theme from local storage if available or set light theme
   const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div >
      <div className="form-control fixed z-50 top-0 right-0">
      <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={moon} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={sun} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
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
