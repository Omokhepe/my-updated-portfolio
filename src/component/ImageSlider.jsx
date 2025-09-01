// import { useState } from "react";
// import "./ImageSlider.css";
// import {projects} from "../constant/data.js";
//
// // const images = [
// //     { src: "/img1.jpg", desc: "Description for Image 1" },
// //     { src: "/img2.jpg", desc: "Description for Image 2" },
// //     { src: "/img3.jpg", desc: "Description for Image 3" },
// //     { src: "/img4.jpg", desc: "Description for Image 4" },
// // ];
//
// export default function ImageSlider() {
//     const [mainIndex, setMainIndex] = useState(0);
//     const [index, setIndex] = useState(0);
//
//     const otherImages = projects.filter((_, i) => i !== mainIndex);
//     const prevSlide = () => {
//         setIndex((prev) => (prev === 0 ? otherImages.length - 1 : prev - 1));
//     };
//
//     const nextSlide = () => {
//         setIndex((prev) => (prev === otherImages.length - 1 ? 0 : prev + 1));
//     };
//
//     const handleClick = (clickedIndex) => {
//         setMainIndex(clickedIndex);
//     };
//
//     return (
//         <>
//             <div className="gallery">
//                 {/* Row 1: Main Image with Description */}
//                 <div className="main-display">
//                     <div className="image-slider">
//                         <img
//                             src={projects[mainIndex].image}
//                             alt={`main-${mainIndex}`}
//                             className="main-img"
//                         />
//                         <a href={projects[mainIndex].site} target="_blank" className="overlay">
//                             <div className="overlay-content">
//                                 <span className="material-symbols-outlined">link</span>
//                                 <span className="text">View Project</span>
//                             </div>
//                         </a>
//                     </div>
//
//                     <p className="textPreset1Med desc">{projects[mainIndex].description}</p>
//                 </div>
//
//                 <div className="slider">
//                     <div
//                         className="slides"
//                         style={{transform: `translateX(-${index * 100}%)`}}
//                     >
//                         {otherImages.map((src, i) => {
//                             const actualIndex = projects.findIndex((x) => x.image === src.image);
//                             // <img key={i} src={src} alt={`slide-${i}`} />
//                             return (
//                                 <img
//                                     key={i}
//                                     src={src.image}
//                                     alt={src.title}
//                                     className="thumb"
//                                     onClick={() => handleClick(actualIndex)}
//                                 />
//                             )
//
//                         })}
//                     </div>
//
//                     <button className="btn-prev prev" onClick={prevSlide}>❮</button>
//                     <button className="btn-prev next" onClick={nextSlide}>❯</button>
//
//                     <div className="dots">
//                         {otherImages.map((_, i) => (
//                             <span
//                                 key={i}
//                                 className={i === index ? "dot active" : "dot"}
//                                 onClick={() => setIndex(i)}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/*<div className="infinite-slide">*/}
//             {/*    <div className="slide-track">*/}
//             {/*        {*/}
//             {/*            projects.map((items,i)=>{*/}
//             {/*                return (*/}
//             {/*                    <div className="slide" key={i}>*/}
//             {/*                        <img src={items.image} alt={items.title} />*/}
//             {/*                    </div>*/}
//             {/*                )*/}
//             {/*            })*/}
//             {/*        }*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//         </>
//
//     );
// }

// import { useState, useEffect, useRef } from "react";
// import {projects} from "../constant/data.js";
//
// export default function ImageSlider() {
//     const [index, setIndex] = useState(0);
//     const slideInterval = useRef(null);
//
//     // Next / Prev handlers
//     const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
//     const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//
//     // Autoplay setup
//     useEffect(() => {
//         startAutoPlay();
//         return () => stopAutoPlay(); // cleanup
//     }, []);
//
//     const startAutoPlay = () => {
//         stopAutoPlay(); // prevent duplicates
//         slideInterval.current = setInterval(nextSlide, 3000); // change every 3s
//     };
//
//     const stopAutoPlay = () => {
//         if (slideInterval.current) clearInterval(slideInterval.current);
//     };
//
//     // Swipe handling (touch support)
//     const [touchStart, setTouchStart] = useState(null);
//
//     const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
//     const handleTouchMove = (e) => {
//         if (!touchStart) return;
//         let touchEnd = e.touches[0].clientX;
//         if (touchStart - touchEnd > 75) {
//             nextSlide();
//             setTouchStart(null);
//         }
//         if (touchStart - touchEnd < -75) {
//             prevSlide();
//             setTouchStart(null);
//         }
//     };
//
//     return (
//         <div
//             style={{
//                 position: "relative",
//                 width: "500px",
//                 height: "300px",
//                 overflow: "hidden",
//                 margin: "auto",
//             }}
//             onMouseEnter={stopAutoPlay}
//             onMouseLeave={startAutoPlay}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//         >
//             <img
//                 src={projects[index].image}
//                 alt="carousel"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//
//             {/* Controls */}
//             <button
//                 onClick={prevSlide}
//                 style={{
//                     position: "absolute",
//                     left: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                 }}
//             >
//                 ◀
//             </button>
//             <button
//                 onClick={nextSlide}
//                 style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                 }}
//             >
//                 ▶
//             </button>
//
//             {/* Dots */}
//             <div
//                 style={{
//                     position: "absolute",
//                     bottom: "10px",
//                     width: "100%",
//                     textAlign: "center",
//                 }}
//             >
//                 {projects.map((_, i) => (
//                     <span
//                         key={i}
//                         onClick={() => setIndex(i)}
//                         style={{
//                             display: "inline-block",
//                             height: "10px",
//                             width: "10px",
//                             margin: "0 5px",
//                             borderRadius: "50%",
//                             background: i === index ? "black" : "lightgray",
//                             cursor: "pointer",
//                         }}
//                     ></span>
//                 ))}
//             </div>
//         </div>
//     );
// }

//
// import { useState, useEffect, useRef } from "react";
// import "./ImageSlider.css";
// import {projects} from "../constant/data.js";
//
// export default function Carousel() {
//
//     const [index, setIndex] = useState(0);
//     const slideInterval = useRef(null);
//     const [touchStart, setTouchStart] = useState(null);
//
//     const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
//     const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//
//     useEffect(() => {
//         startAutoPlay();
//         return () => stopAutoPlay();
//     }, []);
//
//     const startAutoPlay = () => {
//         stopAutoPlay();
//         slideInterval.current = setInterval(nextSlide, 3000);
//     };
//
//     const stopAutoPlay = () => {
//         if (slideInterval.current) clearInterval(slideInterval.current);
//     };
//
//     const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
//     const handleTouchMove = (e) => {
//         if (!touchStart) return;
//         const touchEnd = e.touches[0].clientX;
//
//         if (touchStart - touchEnd > 75) {
//             nextSlide();
//             setTouchStart(null);
//         }
//         if (touchStart - touchEnd < -75) {
//             prevSlide();
//             setTouchStart(null);
//         }
//     };
//
//     return (
//         <div
//             className="carousel"
//             onMouseEnter={stopAutoPlay}
//             onMouseLeave={startAutoPlay}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//         >
//             <img src={projects[index].image} alt="carousel" className="carousel-image" />
//
//             {/* Controls */}
//             <button className="carousel-btn left" onClick={prevSlide}>◀</button>
//             <button className="carousel-btn right" onClick={nextSlide}>▶</button>
//
//             {/* Dots */}
//             <div className="carousel-dots">
//                 {projects.map((_, i) => (
//                     <span
//                         key={i}
//                         className={`dot ${i === index ? "active" : ""}`}
//                         onClick={() => setIndex(i)}
//                     ></span>
//                 ))}
//             </div>
//         </div>
//     );
// }


import { useState, useEffect, useRef } from "react";
import {projects} from "../constant/data.js";
import './ImageSlider.css'

export default function ImageSlider() {
    // const images = ["/images/slide1.jpg", "/images/slide2.jpg", "/images/slide3.jpg"];
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    // Auto play logic
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setIndex((prev) => (prev + 1) % projects.length);
            }, 3000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <div
            className='slider-carousel'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Image */}
            <img
                src={projects[index].image}
                alt="carousel"
                className='slider-carousel-img'
            />

            {/* Controls */}
            <button
                onClick={prevSlide}
                className='img-carousel-prev'
            >
                ◀
            </button>
            <button
                onClick={nextSlide}
                className='img-carousel-next'
            >
                ▶
            </button>

            {/* Indicator Dots */}
            <div
                style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "10px",
                }}
            >
                {projects.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{
                            width: i === index ? "14px" : "10px",
                            height: i === index ? "14px" : "10px",
                            borderRadius: "50%",
                            cursor: "pointer",
                            background: i === index ? "#ff6347" : "rgba(255,255,255,0.5)",
                            border: "2px solid #fff",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

