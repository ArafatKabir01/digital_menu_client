
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Review.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Rating from "react-rating";

const Review = () => {
    return (
        <div>

            <div className=" bg-base-100 pb-8">
                <h2 className='text-5xl font-bold pt-4'>Customer Reviews</h2>
                <>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 20,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper review-style"
                    >
                        <SwiperSlide className="review-slid">

                            <div>
                                <h2 className="font-bold pb-2">NAME : </h2>
                                <Rating
                                    initialRating={4}
                                    readonly

                                    emptySymbol={<img src="https://i.ibb.co/x57rK15/star-1.png" className="icon" />}
                                    fullSymbol={<img src="https://i.ibb.co/5BZKwPf/star.png" className="icon" />}
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
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

                        </SwiperSlide>
                        <SwiperSlide className="review-slid">

                            <div>
                                <h2>Name : </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
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

                        </SwiperSlide>
                        <SwiperSlide className="review-slid">

                            <div>
                                <h2>Name : </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
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

                        </SwiperSlide>
                    </Swiper>
                </>
            </div>

        </div>
    );
};

export default Review;