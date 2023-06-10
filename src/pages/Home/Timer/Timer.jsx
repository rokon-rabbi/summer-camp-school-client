import React from 'react';
import { useState, useEffect } from 'react';
const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date('2023-07-07T00:00:00'); // Set your desired countdown date and time

    const updateCountdown = () => {
      const currentTime = new Date();
      const timeDifference = countdownDate - currentTime;

      if (timeDifference > 0) {
        const remainingTime = {
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDifference / 1000 / 60) % 60),
          seconds: Math.floor((timeDifference / 1000) % 60),
        };

        setDays(remainingTime.days);
        setHours(remainingTime.hours);
        setMinutes(remainingTime.minutes);
        setSeconds(remainingTime.seconds);
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


    return (
        <div>
                 <section className=" bg-blue-400 p-4 md:p-20">
      <div className="max-w-full md:flex justify-between mx-auto">
        <h2 > <span className="md:text-xl text-white  font-bold mb-4" >until first session</span >  <br /><span className="md:text-3xl text-xl  font-bold  text-white   mb-4">Don’t Miss the First Day
of <br/> Summer Camp!</span></h2>
<button className="rounded-xl bg-blue-700 font-bold text-white px-4 py-2 h-12 mt-10 transition-colors duration-300 hover:bg-white hover:text-blue-500">
      Enroll Now
    </button>
        
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex  text-white flex-col p-2 bg-blue-300 rounded-box ">
        <span className="countdown text-white font-mono text-5xl">{days}</span>
       days
      </div>
      <div className="flex text-white flex-col p-2  bg-blue-300 rounded-box ">
        <span className="countdown text-white font-mono text-5xl">{hours}</span>
        hours
      </div>
      <div className="flex flex-col p-2  bg-blue-300 rounded-box text-white">
        <span className="countdown text-white font-mono text-5xl">{minutes}</span>
        minutes
      </div>
      <div className="flex flex-col p-2  bg-blue-300 rounded-box text-white">
        <span className="countdown text-white font-mono text-5xl">{seconds}</span>
        seconds
      </div>
    </div>
      </div>
    </section>
        </div>
    );
};

export default Timer;