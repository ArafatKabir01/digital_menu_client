
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Navbar from '../Navbar/Navbar';

const ViewCart = () => {
    const [order, setOrder] = useState([])
    const [user, loading, error] = useAuthState(auth);

    const email = user.email
    useEffect(() => {

        fetch(`http://localhost:5000/myorder/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [user])

  

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content ">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>

                                    <></>
                                </tr>
                            </thead>
                            {order.map(Value => {
                                return <tbody>

                                    <tr>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">{Value.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="">{Value.price}</p>
                                        </td>
                                        <td>{Value.quantity}</td>
                                        <td>{Value.quantity * Value.price}</td>

                                        <th>
                                            
                                            <label htmlFor="my-modal" className="btn modal-button">Confirm</label>  
                                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Congratulations your order is Confirmed!</h3>
                                                <div className="modal-action">
                                                    <label htmlFor="my-modal" className="btn">OK</label>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                        <th>
                                            
                                            <label htmlFor="my-modal2" className="btn modal-button">Received Food</label>  
                                        <input type="checkbox" id="my-modal2" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Thanks for your Orders </h3>
                                                <textarea className="textarea textarea-warning" placeholder="Give a Review"></textarea>
                                                <div className="modal-action">
                                                    <label htmlFor="my-modal2" className="btn">Send</label>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                             })
                            }
                    </table>
                </div>
            </div>
        </div>
        </div >
    );
};

export default ViewCart;