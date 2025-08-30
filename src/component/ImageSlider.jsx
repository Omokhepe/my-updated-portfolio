import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ImageSlider.css";
import {projects} from "../constant/data.js";

// const images = [
//     { src: "/img1.jpg", desc: "Description for Image 1" },
//     { src: "/img2.jpg", desc: "Description for Image 2" },
//     { src: "/img3.jpg", desc: "Description for Image 3" },
//     { src: "/img4.jpg", desc: "Description for Image 4" },
// ];

export default function ImageSlider() {
    const [mainIndex, setMainIndex] = useState(0);
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };


    const otherImages = projects.filter((_, i) => i !== mainIndex);

    const handleClick = (clickedIndex) => {
        setMainIndex(clickedIndex);
    };

    return (
        <div className="gallery">
            {/* Row 1: Main Image with Description */}
            <div className="main-display">
                <img
                    src={projects[mainIndex].image}
                    alt={`main-${mainIndex}`}
                    className="main-img"
                />
                <p className="textPreset1Med desc">{projects[mainIndex].description}</p>
            </div>

            <div className="slider">
                <div
                    className="slides"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {otherImages.map((src, i) => {
                        const actualIndex = projects.findIndex((x) => x.image === src.image);
                        // <img key={i} src={src} alt={`slide-${i}`} />
                        return (
                            <img
                                key={i}
                                src={src.image}
                                alt={src.title}
                                className="thumb"
                                onClick={() => handleClick(actualIndex)}
                            />
                        )

                    })}
                </div>

                <button className="btn-prev prev" onClick={prevSlide}>❮</button>
                <button className="btn-prev next" onClick={nextSlide}>❯</button>

                <div className="dots">
                    {otherImages.map((_, i) => (
                        <span
                            key={i}
                            className={i === index ? "dot active" : "dot"}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
