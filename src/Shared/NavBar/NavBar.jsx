import React from 'react';
import Logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FaShoppingCart } from 'react-icons/fa';
import { FaSignInAlt } from "react-icons/fa";
// import { AuthContext } from '../../Providers/AuthProvider';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
    const [icon, setIcon] = useState(true);
    
  // const { user, logOut } =  useContext(AuthContext);
  const { user, logOut } =  useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  };
    return (
        <>
            <nav className="md:flex bg-slate-950 md:bg-opacity-80 backdrop-filter backdrop-blur-xm  md:fixed md:w-full z-50 top-0  p-4 md:px-20 md:justify-between   items-center ">
        {icon ? (
          <FontAwesomeIcon
            className="text-3xl text-white  md:hidden inline cursor-pointer relative top-8 justify-start "
            onClick={() => setIcon(!icon)}
            icon={faBars}
          />
        ) : (
          <FontAwesomeIcon
            className="text-4xl  md:hidden inline  relative top-8 cursor-pointer justify-start "
            onClick={() => setIcon(!icon)}
            icon={faXmark}
          />
        )}

        <Link
          to={"/"}
          aria-label="sunrisecamp"
          title="sunrisecamp"
          className="flex justify-center"
        >
          <img
            className="w-20 opacity-80 md:w-24 lg:w-44"
            src={Logo}
            alt="sunrisecamp logo"
          />
        </Link>
        <ul
          className={` bg-slate-900 md:bg-opacity-0  shadow-2xl md:shadow-none  md:border-none border z-10  rounded-r-md px-6 py-2 pb-16 md:space-x-10 md:flex md:static md:text-lg  absolute  text-slate-950 duration-300 ${
            !icon ? "left-0 p-2 mt-2" : "-left-40 "
          } `}
        >
          <li className="">
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              aria-label="Instructors"
              title="Instructors"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              aria-label="Classes"
              title="Classes"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Classes
            </NavLink>
          </li>
      <li className='block md:hidden'>
      <Link className='absolute  md:-bottom-10 top-28 z-50 right-0' to="">
                <button className="btn  gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary ">+{ 0}</div>
                </button>
            </Link>
      </li>
        
         
          {
            user &&(
            <>
            
            <li className='md:pl-0 pl-0'> 
              <NavLink
                to="/dashboard"
                aria-label="Dashboard"
                title="Dashboard"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Dashboard
              </NavLink>
            </li>
            </>
            )
          }
          
        </ul>
       

        {/* <p>{user.displayName}</p> */}
        {user ? (
          <div className="flex items-center  gap-5">
            <div className="hidden md:block">
              <div className="  hover:cursor-pointer rounded-full overflow-hidden">
                <img
                  className="md:w-12 md:h-12"
                  src={user.photoURL}
                  alt="Profile"
                  title={user.displayName}
                />
              </div>
            </div>
            {/* button  */}
            <button
              onClick={handleLogOut}
              className="hidden md:block text-slate-600  border-sky-500 px-4 hover:bg-white py-1 border-2 rounded-full hover:text-sky-600 font-bold md:text-lg  "
            >
              logout
              <FaSignInAlt className="inline ml-1 mb-1 font-bold" />
            </button>
           
            <Link className='absolute hidden md:block md:-bottom-10 top-28 z-50 right-0' to="">
                <button className="btn  gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary ">+{ 0}</div>
                </button>
            </Link>
          </div>
          
        ) : (
          <Link to={"/login"}>
            <button className="hidden md:block  text-white border-sky-500 px-4 hover:bg-white py-1 border-2 rounded-full hover:text-sky-600 font-bold md:text-lg ">
              <FaSignInAlt className="inline mr-1 mb-1 font-bold" />
              login
            </button>
          </Link>
        )}

        <div className="flex right-11 relative md:hidden ">
          {user ? (
            <div className="flex items-center gap-5">
              <div className="">
                <div className=" left-64 bottom-5  absolute hover:cursor-pointer rounded-full overflow-hidden ">
                  <img
                    className=" h-9 w-9"
                    src={user.photoURL}
                    alt="Profile"
                    title={user.displayName}
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className=" left-72  text-white  hover:text-sky-600  border-sky-500 px-auto  py-auto  rounded-full  ml-auto relative md:w-100 w-20 bottom-6 font-bold text-sm md:md:text-lg    "
                >
                  logout
                  <FaSignInAlt className="inline ml-1 font-bold" />
                </button>
              </div>
            </div>
          ) : (
            <Link to={"/login"} className="left-10  text-white  hover:text-sky-600  border-sky-500 px-auto hover:bg-white  py-auto border-2 rounded-full  ml-auto relative md:w-100 w-20 bottom-10 font-bold text-sm md:md:text-lg   p-1" >
             
                <FaSignInAlt className="inline mr-1 font-bold" />
                login
              
            </Link>
          )}
        </div>
      </nav>
 
        </>
    );
};

export default NavBar;