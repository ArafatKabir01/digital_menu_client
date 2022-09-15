import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Review from '../Review/Review';

const Purchaese = () => {
    const [user, loading, error] = useAuthState(auth);
    
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let { id } = useParams()
    console.log(id)
    
    const [product, setProduct] = useState([])
    
    
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/food/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/customerOrder`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => console.log(result))

        if (data.title && data.quantity) {
            navigate('/dashboard/myorder')
        }


    };

    return (
        <div>

            <div className="hero  min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product.coverSrc} className="w-80 md:w-96 lg:w-3/5 h-62 md:h-62 lg:h-3/5 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.details}</p>
                        <div className='w-50 h-50 text-left font-bold	leading-6 '>
                            <p className='text-white pb-4'>Price : {product.price} TK</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                                    ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                                    dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                                    faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                                    elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                                    tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                                    Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                                    hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                                    tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                                    nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                                    sodales posuere eget non est. Fusce convallis vestibulum dolor non
                                    volutpat. Vivamus vestibulum quam ut ultricies pretium.
                            </p>
                            
                        </div>
                        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                        <div className='flex gap-4 mt-8'>
                            {/* <div className="form-control">
                                <label className="input-group">
                                    <button className="btn btn-primary">-</button>
                                    <input type="number" {...register("quantity", { min: 20, max: 300 })} style={{ "width": "80px" }} size="2" className="input input-bordered " />
                                    <button className="btn btn-primary">+</button>
                                </label>
                            </div> */}
                            <label htmlFor="my-modal-6" className="btn modal-button">Add To Cart</label>
                            <button htmlFor="my-modal-6" className="btn modal-button">Extra Items</button>
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <form className='m-auto' onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-control w-80 ">
                                            <label className="label">
                                                <span className="label-text">Your Name</span>
                                            </label>
                                            <input {...register("name", { required: true })} type="text"  className="input input-bordered" />
                                            <label className="label">
                                                <span className="label-text">Your Table Number</span>
                                            </label>
                                            <input value={user?.email.slice(0,6)} {...register("tableNumber", { required: true })} type="number"  className="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Product Title</span>
                                            </label>
                                            <input value={product.title} {...register("title", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Price</span>
                                            </label>
                                            <input value={product.price} {...register("price", { required: true })} type="text" class="input input-bordered" />
                                            <label className="label">
                                                <span className="label-text">Set Quantity</span>
                                            </label>
                                            <input {...register("quantity", { min: 1 ,max :20 }, { required: true })} type="number" className="input input-bordered" />
                                            {errors.quantity && <span>Please Minimum Quantity upto 20</span>}
                                        </div>

                                        <div className="form-control mt-6 flex" >

                                            <input type="submit" className="btn btn-primary w-80 mb-2" />
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        {/* </form> */}
                    </div>
                </div>

            </div>
            <Review/>

        </div >
    );
};

export default Purchaese;