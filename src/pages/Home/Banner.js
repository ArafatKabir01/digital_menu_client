
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { useQuery } from "react-query";
import Loading from "../Common/Loading";

const Banner = () => {
    const { data: bItems, isLoading, refetch } = useQuery('bItems', () => fetch('http://localhost:5000/bannerItems')
        .then(res => res.json()));
    if (isLoading) {
        return <Loading/>
    }
    console.log(bItems)

    return (
        <div>

            <>
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    // navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {

                        bItems.map(item => <>
                            <SwiperSlide>
                                <div className="hero min-h-screen bg-base-200">
                                    <div className="hero-content flex-col lg:flex-row">
                                        <img src={item.img} className=" w-16 md:w-32 lg:w-9/12" />
                                        <div>
                                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                            <div className="w-50 h-50 m-4 text-xl font-bold	text-white" >
                                                <h2 >Price: 350 TK</h2>
                                            </div>
                                            <button className="btn btn-success">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                        )}

                </Swiper>
            </>
        </div>

    );
};

export default Banner;