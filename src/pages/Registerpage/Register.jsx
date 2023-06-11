import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import Swal from 'sweetalert2'
// import { AuthContext } from "../../Providers/AuthProvider";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, googleSignIn } =
    useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        role: "user",
      };
      
    });
  };
  const onSubmit = data => {
    createUser(data.email, data.password).then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          console.log(saveUser);
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch(error => console.log(error));
    });
  };
  return (
    <>
      <Helmet>
        <title>SummerCamp | Sign Up</title>
      </Helmet>

     <div className=" md:mt-48 my-28">
     <div className="flex justify-center items-center  h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-slate-50 rounded-lg p-6 shadow"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold  mt-5 ">
              Register now!
            </h1>
          </div>
          <div className="form-control">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              className=" w-full shadow-md  border p-2 rounded-md focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
              className="  w-full shadow-md  border p-2 rounded-md focus:outline-none"
            />
            {errors.photoURL && (
              <span className="text-red-600">Photo URL is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="email"
              className=" w-full shadow-md  border p-2 rounded-md focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
              })}
              placeholder="password"
              className=" w-full shadow-md  border p-2 rounded-md focus:outline-none"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
           
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have a Uppercase and special character.
              </p>
            )}
          </div>
          <div className="text-center mt-5">
                <button
                  className=" bg-blue-500 text-white font-bold w-24 mx-auto py-2 px-2 text-center rounded-md hover:bg-blue-600"
                  type="submit"
                >
                  Register
                </button>
                </div>
          <p className="text-xl my-8 font-bold text-center">
            <small>
              Already have an account!{" "}
              <Link className=" text-blue-800 underline" to="/login">
                login
              </Link>{" "}
            </small>
          </p>
          <div className="divider"></div>
          <div className="w-full text-center my-4">
            <button onClick={handleGoogleSignIn} type="button" className=" hover:shadow-md">
              <img
                src="https://developers.google.com/static/identity/images/btn_google_signin_light_normal_web.png"
                alt=""
              />
            </button>
          </div>
        </form>
      </div>
     </div>
    </>
  );
};

export default Register;
