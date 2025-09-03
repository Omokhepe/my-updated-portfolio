import React, { useState } from "react";
import Carousel from "react-img-carousel";
import "react-img-carousel/lib/carousel.css";
import "./ImageSlider.css";
import {projects} from "../constant/data.js";


export default function ImageSlider() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleTap = (i) => {
        setActiveIndex(activeIndex === i ? null : i);
    };

    return (
        <Carousel
            autoplay={true}
            autoplaySpeed={3000}
            infinite={true}
            dots={true}
            arrows={true}
            slideWidth="700px"
            swipe={true}
            draggable={true}
        >
            {projects.map((item, i) => (
                <div
                    className={`slide ${activeIndex === i ? "show-overlay" : ""}`}
                    key={i}
                    onClick={() => handleTap(i)}
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
            ))}
        </Carousel>
    );
}


