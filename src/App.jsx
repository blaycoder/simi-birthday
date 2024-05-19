import { useState, useLayoutEffect, useRef } from "react";
import "./App.css";
import Confetti from "react-confetti";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_image_1 from "./assets/images/img-1.jpg";
import slide_image_2 from "./assets/images/img-2.jpg";
import slide_image_3 from "./assets/images/img-3.jpg";
import slide_image_4 from "./assets/images/img-4.jpg";
import slide_image_5 from "./assets/images/img-5.jpg";
import slide_image_6 from "./assets/images/img-6.jpg";
import slide_image_7 from "./assets/images/img-7.jpg";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const comp = useRef(null);

  const handleConfetti = (e) => {
    e.preventDefault();
    setShowConfetti((showConfetti) => !showConfetti);
  };

  useLayoutEffect(() => {
    const t1 = gsap.timeline();
    let mm = gsap.matchMedia();
    mm.add(
      {
        isMobile: "(max-width: 600px)",
        isDesktop: "(min-width: 768px)",
        reduceMotion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        let { isMobile, isDesktop, reduceMotion } = context.conditions;
        t1.from("#b-text", {
          xPercent: reduceMotion ? 0 : isMobile ? "-100" : "-300",
          duration: 1.3,
          delay: 0.3,
          scale: 2,
        })
          .to("#b-text", {
            xPercent: isMobile ? "-20" : "0",
            duration: 0.5,
            scale: 1,
          })
          .from("#name", {
            opacity: 0,
            y: isDesktop ? "+=30" : "0",
            stagger: 0.5,
          });
      },
      comp
    );
    return () => mm.revert();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      {showConfetti && <Confetti />}
      <div
        ref={comp}
        className="flex flex-col items-center text-center overflow-hidden"
      >
        <div>
          <h1
            id="b-text"
            className="uppercase font-black text-base md:text-5xl"
          >
            Happy Birthday
          </h1>
          <p
            id="name"
            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-4"
          >
            SIMILEOLUWA
          </p>
        </div>
        <div className="card mt-4">
          <button
            onClick={handleConfetti}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Explode Confetti
          </button>
        </div>
      </div>
      <div className="w-full max-w-screen-lg mt-8">
        <h1 className="text-xl mb-4 text-center">Simi's Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 1,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
              },
              pagination: false,
              navigation: false,
            },
            480: {
              slidesPerView: 1.5,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
              },
              pagination: false,
              navigation: false,
            },
            640: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
              },
              pagination: false,
              navigation: false,
            },
            768: {
              slidesPerView: 2.5,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
              },
              pagination: false,
              navigation: false,
            },
            1024: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              },
            },
          }}
          className="swiper_container"
        >
          <SwiperSlide>
            <img
              src={slide_image_1}
              alt="slide_image"
              className="swiper-lazy w-full"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_2}
              alt="slide_image"
              className="swiper-lazy w-full"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_3}
              alt="slide_image"
              className="swiper-lazy w-full"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_4}
              alt="slide_image"
              className="swiper-lazy w-full"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_5}
              alt="slide_image"
              className="swiper-lazy w-full"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_6}
              alt="slide_image"
              className="swiper-lazy w-full"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_7}
              alt="slide_image"
              className="swiper-lazy w-full"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default App;
