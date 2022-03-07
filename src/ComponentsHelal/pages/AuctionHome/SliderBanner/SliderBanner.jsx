import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import './Style.css';

// slider images
import slider1 from "../../../../assets/images/slider/slider-1.png";
import slider2 from "../../../../assets/images/slider/slider-2.png";
import slider3 from "../../../../assets/images/slider/slider-3.png";
import { Link } from 'react-router-dom';

const sliders = [
    {
        _id: 1,
        title: "A ferrari a luxurious configuration",
        imgSrc: slider1
    },
    {
        _id: 2,
        title: "A ferrari a luxurious configuration",
        imgSrc: slider2
    },
    {
        _id: 3,
        title: "A ferrari a luxurious configuration",
        imgSrc: slider3
    },
];

const SliderBanner = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="banner-slider-sec">
                {
                    sliders.map(slider => (
                        <SwiperSlide key={slider._id}>
                            <div className="banner-slider" style={{ backgroundImage: `url(${slider.imgSrc})` }}>
                                <div className="banner-slider-content">
                                    <h2>{slider.title}</h2>
                                    <Link to="/#">Read More</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default SliderBanner;