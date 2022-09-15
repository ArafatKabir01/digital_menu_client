import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import UseFoods from "../../Hooks/UseFoods";


const BestSellFood = () => {
    const [product, setProduct] = UseFoods()
    const navigate = useNavigate();
    const navigateToProductInfo = id =>{
        navigate(`/purchase/${id}`)

    }
    return (
      
            <>
                <h2 className="text-3xl font-bold text-left mt-8	">Best Selling Items</h2>
                {product.map(f => <SwiperSlide className="foodSwiperSlid">
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={()=> navigateToProductInfo(f._id)} className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                        

                    </>
       
    );
};

export default BestSellFood;