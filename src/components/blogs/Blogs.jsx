import React from "react";
import "./blogs.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Blogs = () => {
  return (
    <section className="blog container section" id="blogs">
      <h2 className="section__title">My Blogs</h2>
      <span className="section__subtitle">What i write</span>

      <Swiper
        className="blog__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, link }) => {
          return (
            <SwiperSlide className="blog__card" key={id}>
              <img src={image} alt="" className="blog__img" />

              <h3 className="blog__name">{title}</h3>
              <p className="blog__description">{description}</p>
              <a href={link} target="_blank" className="blog__button">
                Read More
                <i className="uil uil-arrow-right blog__button-icon"></i>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blogs;
