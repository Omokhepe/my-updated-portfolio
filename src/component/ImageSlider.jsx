import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";
import {projects} from "../constant/data.js";

export default function ImageSlider() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleTap = (i) => {
        setActiveIndex(activeIndex === i ? null : i);
    };

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // 👈 this pauses autoplay on hover
            }}
            loop={true}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
            }}
        >
            {projects.map((item, i) => (
                <SwiperSlide key={i}>
                    <div
                        className={`slide ${activeIndex === i ? "show-overlay" : ""}`}
                        onClick={() => handleTap(i)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <img src={item.image} alt={`slide-${i}`} />
                        <div className="overlay">
                            {item.description}
                            {
                                item.site !== '' && (
                                    <a href={item.site} target="_blank" className="view-project">
                                        <div className="overlay-content">
                                            <span className="material-symbols-outlined icon">link</span>
                                            <span className="textPresetBold text">View Project</span>
                                        </div>
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

