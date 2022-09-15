import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Slider from '@material-ui/core/Slider';
import "./ChooseFood.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import FilterOption from "./FilterOption";
import UseFoods from "../../Hooks/UseFoods";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { useState } from "react";
const ChooseFood = () => {
    const [search , setSearch] = useState('')
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [product, setProduct] = UseFoods()
    const navigate = useNavigate();
    const navigateToProductInfo = id => {
        navigate(`/purchase/${id}`)

    }
    const searchFood = e =>{
        const result = e.target.value
        setSearch(result)
        
    }

    const handleCheckBd =(e)=>{
        console.log(e.target.checked)
        if(e.target.checked === true){
                fetch(`http://localhost:5000/cuisine/chinese`)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
        else if(e.target.checked === false){
            fetch('http://localhost:5000/allFoods')
            .then(res => res.json())
            .then(data => setProduct(data))

        }
    }
    const handleCheckCh =(e)=>{
        console.log(e.target.checked)
        if(e.target.checked === true){
            fetch(`http://localhost:5000/cuisine/italian`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }
    else if(e.target.checked === false){
        fetch('http://localhost:5000/allFoods')
        .then(res => res.json())
        .then(data => setProduct(data))

    }
    }
    const handleCheckIn =(e)=>{
        console.log(e.target.checked)
        if(e.target.checked === true){
            fetch(`http://localhost:5000/cuisine/american`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }
    else if(e.target.checked === false){
        fetch('http://localhost:5000/allFoods')
        .then(res => res.json())
        .then(data => setProduct(data))

    }
    }
 
    const changePrice = (event, value) => {
        setSelectedPrice(value);
    }
 
    
    return (
        <div>
            <div className="drawer drawer-mobile bg-base-200 container m-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center mt-12">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <>
                        <h2 className="text-3xl font-bold text-left	">For You</h2>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper foodSwiper"
                        >
                            {
                                  product.filter(value =>{
                                    if(search === "" ){
                                        return value;
                                    }else if(value.title.toLowerCase().includes(search.toLowerCase())){
                                        return value 
                                        
                                    }else if(value.price >= 1000
                                        && value.price <= selectedPrice ){
                                        return value    
                                    }
                                  
                                        
                                }).map( value => {
                                    return ( 
                                    <SwiperSlide className="foodSwiperSlid">
                                    <div className="card hover:-translate-y-6 duration-700 card-compact w-96 bg-base-100 shadow-xl ">
                                        <figure><img data-aos="zoom-in" data-aos-duration="2000" className='h-80 w-full' src={value.coverSrc} alt="Shoes" /></figure>
                                        <div  className="card-body text-left">
                                            <h2 className="card-title">{value.title}</h2>
                                            <p className="">{value.cuisine}</p>
                                            {/* <p>{value.details}</p> */}
                                            <div className=' font-bold text-white'>
                                                <p>Price : {value.price} TK</p>
                                                <Rating
                                                 initialRating={value.rating}
                                                 readonly
                                                
                                                    emptySymbol={<img src="https://i.ibb.co/x57rK15/star-1.png" className="icon" />}
                                                    fullSymbol={<img src="https://i.ibb.co/5BZKwPf/star.png" className="icon" />}
                                                />
    
    
    
                                            </div>
                                            <div className="card-actions justify-end">
                                                <button onClick={() => navigateToProductInfo(value._id)} className="btn btn-primary">Buy Now
                                                </button>
    
                                            </div>
                                        </div>
                                    </div>
    
                                </SwiperSlide>
                                )

                                })}
                            
                        </Swiper>
                    </>

                    <>
                        <h2 className="text-3xl font-bold text-left mt-8">Best Rating Items</h2>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper foodSwiper "
                        >
                             {
                                  product.filter(value =>  value.rating === 4).map(value => {
                                    return ( 
                            <SwiperSlide className="foodSwiperSlid">
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={value.coverSrc}alt="Shoes" /></figure>
                                    <div className="card-body text-left">
                                        <h2 className="card-title">{value.title}</h2>
                                        <div className=' font-bold text-white'>
                                                <p>Price : {value.price} TK</p>
                                                <Rating
                                                 initialRating={value.rating}
                                                 readonly
                                                
                                                    emptySymbol={<img src="https://i.ibb.co/x57rK15/star-1.png" className="icon" />}
                                                    fullSymbol={<img src="https://i.ibb.co/5BZKwPf/star.png" className="icon" />}
                                                />
    
    
    
                                            </div>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => navigateToProductInfo(value._id)} className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                             )

                            })}
                        </Swiper>

                    </>



                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <div className="input-group mt-20">

                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <input onChange={searchFood} type="text" placeholder="Search…" className="input input-bordered" />
                </div>
                {/* Category  */}

                <div className="form-control  mt-8">
                    <h2>Cuisine</h2>
                    <label className="cursor-pointer label">
                        <span className="label-text">Chinese</span>
                        <input onChange={handleCheckBd}  type="checkbox"  className="checkbox checkbox-accent" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Italian</span>
                        <input onChange={handleCheckCh} type="checkbox"  className="checkbox checkbox-accent" />
                    </label>
                </div>
                <div className="form-control ">
                    <label className="cursor-pointer label">
                        <span className="label-text">American</span>
                        <input onChange={handleCheckIn} type="checkbox"  className="checkbox checkbox-accent" />
                    </label>
                </div>
                <div className="form-control mt-20">
                <p className='label-range mt-8'>Price Range</p>
                <div className="">
                    <Slider
                        onChange={changePrice}
                        valueLabelDisplay='on'
                        min={1000}
                        max={5000}
                        className=""
                    />
                </div>
            </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ChooseFood;