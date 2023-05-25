import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./BkCards.css";
import CardContent from "./CardContent/CardContent";
import ebk1 from "../../../assets/ebooks/ebk1.webp";
import ebk2 from "../../../assets/ebooks/ebk2.webp";
import ebk3 from "../../../assets/ebooks/ebk3.webp";
import ebk4 from "../../../assets/ebooks/ebk4.webp";
import ebk5 from "../../../assets/ebooks/ebk5.webp";
import ebk6 from "../../../assets/ebooks/ebk6.webp";
import abk1 from "../../../assets/audiobks/abk1.webp";
import abk2 from "../../../assets/audiobks/abk2.webp";
import abk3 from "../../../assets/audiobks/abk3.webp";
import abk4 from "../../../assets/audiobks/abk4.webp";

export default function BkCards(props) {
    return (
        <>
            <div className="container-xl">
                <div className="row justify-content-center">
                    <div className="books">
                        <h2 className="bk-head">{props.bkhead}</h2>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <CardContent 
                                    imgName={ebk1}
                                    type="Ebook"
                                    title="The Perfect Marriage: A Completely Gripping Psychological Suspense"
                                    author="Jeneva Rose" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={abk1}
                                    type="Audiobook"
                                    title="The Last Mrs. Parrish: A Novel"
                                    author="Liv Constantine" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={abk2}
                                    type="Audiobook"
                                    title="The Guest List: A Novel"
                                    author="Lucy Foley" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={abk3}
                                    type="Audiobook"
                                    title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
                                    author="Mark Manson" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={abk4}
                                    type="Audiobook"
                                    title="Building a StoryBrand: Clarify Your Message So Customers Will Listen"
                                    author="Findaway" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={ebk2}
                                    type="Ebook"
                                    title="An Ugly Truth: Inside Facebook's Battle for Domination"
                                    author="Sheera Frenkel" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={ebk3}
                                    type="Ebook"
                                    title="Never Split the Difference: Negotiating As If Your Life Depended On It"
                                    author="Chris Voss" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={ebk4}
                                    type="Ebook"
                                    title="Everything Is F*cked: A Book About Hope"
                                    author="Mark Manson" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={ebk5}
                                    type="Ebook"
                                    title="The Intelligent Investor, Rev. Ed: The Definitive Book on Value Investing"
                                    author="Benjamin Graham" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardContent 
                                    imgName={ebk6}
                                    type="Ebook"
                                    title="Vanderbilt: The Rise and Fall of an American Dynasty"
                                    author="Anderson Cooper" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>

        </>
    )
}