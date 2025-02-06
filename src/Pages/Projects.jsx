import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";

export default function Project({ videos, name }) {
    const uniqueId = Math.random().toString(36).substr(2, 9); 
  
    return (
      <div className="min-h-screen w-screen flex flex-col items-center justify-center relative">
        <div className="text-center text-white text-4xl">{name}</div>
  
        {/* Swiper Container */}
        <div className="mt-10 flex justify-center items-center w-full relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: `.custom-prev-${uniqueId}`,
              nextEl: `.custom-next-${uniqueId}`,
            }}
            pagination={{ clickable: true }}
            autoplay={false}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            className="w-4/5 h-[25rem]"
            onSlideChange={(swiper) => {
              // Adjust styles dynamically
              const slides = swiper.el.querySelectorAll(".swiper-slide");
              slides.forEach((slide, index) => {
                if (index === swiper.activeIndex) {
                  slide.style.transform = "scale(1) rotate(0deg)";
                  slide.style.filter = "blur(0px)";
                  slide.style.pointerEvents = "auto"
                } else if (index === swiper.activeIndex - 1) {
                  slide.style.transform = "scale(0.7) rotateY(30deg)";
                  slide.style.filter = "blur(4px)";
                  slide.style.pointerEvents = "none"
                } else if (index === swiper.activeIndex + 1) {
                  slide.style.transform = "scale(0.7) rotateY(-80deg)";
                  slide.style.filter = "blur(4px)";
                  slide.style.pointerEvents = "none"
                }
              });
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center transition-all duration-300"
              >
                <iframe
                  src={video.url}
                  allow="autoplay; fullscreen"
                  loading="lazy"
                  className="w-full h-90 rounded-lg transition-all duration-300"
                  style={{ aspectRatio: "16/9" }}
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
  
          {/* Custom Navigation Buttons */}
          <button className={`custom-prev-${uniqueId}`} id="custom-prev">
            ❮
          </button>
          <button className={`custom-next-${uniqueId}`} id="custom-next">
            ❯
          </button>
        </div>
      </div>
    );
  }
  
