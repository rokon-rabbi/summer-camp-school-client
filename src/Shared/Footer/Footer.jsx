import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Footer = () => {
    return (
      <>
      <div className=" bg-zinc-950 md:h-100 relative h-full  ">
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/collection-social-media-monochromatic-doodles_79603-1753.jpg?w=740&t=st=1683022134~exp=1683022734~hmac=646b8e8a753a62db05a0ebdd6cf4cb5d55f047b8e89f4fe1ab39aae9c2ed8faf")`,
            opacity: "0.04",
          }}
        ></div>
        <div className="  relative md:h-96  md:px-20 grid md:grid-cols-12 px-14 py-5 md:py-14">
          <div className="col-span-4 grid md:justify-between ">
            <p className="text-white font-bold text-3xl">Subscribe</p>
            <p className=" text-gray-300 font-thin text-sm w-72">
              Register and get notified about all the news & updates before it
              gets too late.
            </p>
            <div className="d-flex ">
              <input
                className=" shadow appearance-none bg-black  rounded  md:py-4 md:px-5 py-2 px-3 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email address"
              />

              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold md:py-4 py-2 px-3 md:px-5 ml-1 rounded focus:outline-none focus:shadow-outline "
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="col-span-2 p-2 md:p-0 grid justify-between">
            <p className="text-white font-bold text-3xl">Explore</p>
            <p className="text-gray-300 text-sm">Browse Recipes</p>
            <p className="text-gray-300 text-sm">Submit a Recipe</p>
            <p className="text-gray-300 text-sm">Our Chefs</p>
            <p className="text-gray-300 text-sm">Latest News</p>
          </div>

          <div className="col-span-2 p-2 md:p-0  grid justify-between">
            <p className="text-white font-bold text-3xl">Support</p>
            <p className="text-gray-300 text-sm">Help Desk</p>
            <p className="text-gray-300 text-sm">Sales</p>
            <p className="text-gray-300 text-sm">Become a Partner</p>
            <p className="text-gray-300 text-sm">Developers</p>
          </div>
          <div className="col-span-2 p-2 md:p-0 h-40 grid justify-between">
            <p className="text-white font-bold text-3xl">Contact</p>
            <p className="text-gray-300 text-sm mt">
              787 Mark View Street, New Town, India
            </p>

            <p className="text-gray-300 text-sm">needhelp@foodhub.com</p>
            <p className="text-gray-300 text-sm">666 888 0000</p>
          </div>
        </div>
      </div>
      <div className=" bg-zinc-950  grid md:flex md:justify-between justify-center md:items-center md:px-20 pt-2 pb-5">
        <p className="text-gray-300 text-sm">
          @2023 FoodHub. All Rights Reserved
        </p>
        <div className=" p-2 md:p-0 h-10 mt-5 ">
          
            <div className="flex mx-auto gap-4">
              <a href="https://twitter.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current cursor-pointer text-sky-300 "
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current cursor-pointer text-red-600"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://facebook.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current cursor-pointer  text-sky-700"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
      </div>
    </>
    );
};

export default Footer;