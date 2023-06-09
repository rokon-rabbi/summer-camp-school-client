import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from 'react-hook-form';
const Loginpage = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    signIn(data.email, data.password).then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      // fetch('https://bistro-boss-server-fawn.vercel.app/users', {
      //     method: 'POST',
      //     headers: {
      //         'content-type': 'application/json'
      //     },
      //     body: JSON.stringify(saveUser)
      // })
      //     .then(res => res.json())
      //     .then(() => {
      //         navigate(from, { replace: true });
      //     })
    });
  };


  return (
    <>
      <Helmet>
        <title>SummerCamp | Login</title>
      </Helmet>
      
            <div className="flex justify-center items-center h-screen">
          
              <form
                className="w-full max-w-md  bg-gray-50 rounded-lg p-6 shadow"
                onSubmit={handleSubmit(onSubmit)}
              >
                  <div className="text-center lg:text-left">
              <h1 className="text-5xl text-center font-bold  mt-5 ">
                Login now!
              </h1>
            </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-md font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full shadow-md  border p-2 rounded-md focus:outline-none"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      Email is required
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-md font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full  shadow-md   border  p-2 rounded-md focus:outline-none"
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      Password is required
                    </span>
                  )}
                </div>
                <div className="text-center">
                <button
                  className=" bg-blue-500 text-white font-bold w-24 mx-auto py-2 px-2 text-center rounded-md hover:bg-blue-600"
                  type="submit"
                >
                  Sign In
                </button>
                </div>
               
                <p className="text-xl my-8 font-bold text-center">
              <small>
                New Here?{" "}
                <Link className=" text-blue-800 underline" to="/register">
                  Create an account
                </Link>{" "}
              </small>
            </p>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
              <button onClick={handleGoogleSignIn} className=" hover:shadow-md">
                <img
                  src="https://developers.google.com/static/identity/images/btn_google_signin_light_normal_web.png"
                  alt=""
                />
              </button>
            </div>
              </form>
            </div>
        
           
        
    </>
  );
};

export default Loginpage;
