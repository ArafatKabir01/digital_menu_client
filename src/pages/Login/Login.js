import React from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";




const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorLogin;
    let cheqLoading;
    if (error) {
        errorLogin = <p className='text-red-600'>{error?.message}</p>
    }
    if (loading) {
        cheqLoading = <div className='ml-auto mr-auto mt-2'><button className="btn btn-square  loading"></button></div>;
    }
    if (user) {
        navigate(from, { replace: true });

    }

    const onSubmit = async info => {
        signInWithEmailAndPassword(info.email, info.password)
    }

    return (
        <div>
            <section>
                <div className="hero  min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                    <form onSubmit={handleSubmit(onSubmit)} action="index.html">
                                        <h2 className='text-5xl text-white font-bold text-center mb-8 pt-12'>Welcome</h2>
                                        <div class="input-div one">
                                            <div class="i">
                                                <i class="fas fa-user"></i>
                                            </div>
                                            <div class="div">
                                                <input placeholder='Your Email' {...register("email", { required: true, maxLength: 20 })} type="email" class="input" />
                                                {errors.email?.type === 'required' && "Email is required"}
                                            </div>
                                        </div>
                                        <div class="input-div pass">
                                            <div class="i">
                                                <i class="fas fa-lock"></i>
                                            </div>
                                            <div class="div">
                                                <input placeholder='Password' {...register("password", { required: true, maxLength: 20 })} type="password" class="input" />
                                                {errors.password && "Password is required"}
                                            </div>
                                        </div>
                                        

                                        <input type="submit" className="login-btn mt-8" value="Login" />
                                        {errorLogin}
                                        {cheqLoading}

                                    </form>
                        </div>
                        </div>

                    </section>
                </div>
                );
};

                export default Login;