import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div className='bg-base-100 container '>
            <div  className="navbar text-white bg-base-100 m-auto   ">
                <div className="flex-1 justify-evenly justify-items-center">
                    <Link to="/" ><a className="btn btn-ghost normal-case text-xl me-8">Digital Menu </a></Link>
                    <Link to="chooseFood" className='text-lg text-center '><button className="btn btn-outline btn-success">CHOOSE FOOD</button></Link>
                    <Link to="login" className='text-lg text-center '><button className="btn btn-outline btn-success">Login</button></Link>
                    {user ? <p>{user.email.slice(0,6).toUpperCase()}</p> : <></>}
                </div>
                
                <div className="flex-none ">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div   className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div  className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-success btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;