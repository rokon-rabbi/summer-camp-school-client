import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';

const Loginpage = () => {
   
    const { signIn,googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
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
            })
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }


    return (
        <>
            <Helmet>
                <title>SummerCamp | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold ">Login now!</h1>
                    </div>
                    <div className="card md:w-96 max-w-sm shadow-2xl bg-slate-100">
                        <form onSubmit={handleLogin} className="font-bold  card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input bg-white shadow-md" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-white shadow-md" />
        
                            </div>
                           
                           
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-xl font-bold text-center'><small>New Here? <Link className=' text-blue-800 underline' to="/register">Create an account</Link> </small></p>
                        <div className="divider"></div>
            <div className="w-full text-center my-2">
                <button onClick={handleGoogleSignIn} className="">
                <img src="https://developers.google.com/static/identity/images/btn_google_signin_light_normal_web.png" alt="" />
                </button>
            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loginpage;