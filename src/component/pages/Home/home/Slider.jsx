import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from '../../../../assets/images/slider/slider1.jpg'
import slide2 from '../../../../assets/images/slider/slider2.jpg'
import slide3 from '../../../../assets/images/slider/slider3.jpg'
import slide4 from '../../../../assets/images/slider/slider4.jpg'
import slide5 from '../../../../assets/images/slider/slider5.jpg'
import slide6 from '../../../../assets/images/slider/slider6.jpg'
import slide7 from '../../../../assets/images/slider/slider7.jpg'
import slide8 from '../../../../assets/images/slider/slider8.jpg'
import slide9 from '../../../../assets/images/slider/slider9.jpg'


// import required modules
import { Pagination, Navigation } from "swiper";
import SectionTitle from "../../../SectionTitle/SectionTitle";
const Slider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
    };
    return (

        <>

            <SectionTitle
                heading={"Our Trending Courses"}
                subHeading={`10am to 8pm`}
            >

            </SectionTitle>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper my-10"
            >
                <SwiperSlide className=" rounded-lg ">
                    <img className="transparent" src={slide1} alt="" />
                    <div className="text-white bg-white">
                        <h3 className="mt-[-280px] ">ATA Tigers</h3>
                        <p>In addition to our internationally recognized Karate for Kids program, we offer the Taekwondo for Tiny Tigers program. The Tiger program was developed specifically for preschool age children ages 3 through 6.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className=" rounded-lg ">
                    <img className="transparent" src={slide2} alt="" />
                    <div className="text-white bg-white">
                        <h3 className="mt-[-280px] ">ATA Tigers</h3>
                        <p>In addition to our internationally recognized Karate for Kids program, we offer the Taekwondo for Tiny Tigers program. The Tiger program was developed specifically for preschool age children ages 3 through 6.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className=" rounded-lg ">
                    <img className="transparent" src={slide3} alt="" />
                    <div className="text-white bg-white">
                        <h3 className="mt-[-280px] ">ATA Tigers</h3>
                        <p>In addition to our internationally recognized Karate for Kids program, we offer the Taekwondo for Tiny Tigers program. The Tiger program was developed specifically for preschool age children ages 3 through 6.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className=" rounded-lg ">
                    <img className="transparent" src={slide4} alt="" />
                    <div className="text-white bg-white">
                        <h3 className="mt-[-280px] ">ATA Tigers</h3>
                        <p>In addition to our internationally recognized Karate for Kids program, we offer the Taekwondo for Tiny Tigers program. The Tiger program was developed specifically for preschool age children ages 3 through 6.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className=" rounded-lg ">
                    <img className="transparent" src={slide5} alt="" />
                    <div className="text-white bg-white">
                        <h3 className="mt-[-280px] ">ATA Tigers</h3>
                        <p>In addition to our internationally recognized Karate for Kids program, we offer the Taekwondo for Tiny Tigers program. The Tiger program was developed specifically for preschool age children ages 3 through 6.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide9} alt="" />
                </SwiperSlide>

            </Swiper>


        </>

    );
};

export default Slider;