import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/Testimonials.css";
import testiimage from '../assets/supriya.jpg'; 
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Parent",
      img: "testiimage",
      text: "The school provides a nurturing environment with excellent teachers. My child loves coming to school every day!",
    },
    {
      name: "Sita Reddy",
      role: "Parent",
      img: "testiimage",
      text: "The school provides a nurturing environment with excellent teachers. My child loves coming to school every day!",
    },
    {
      name: "Anil Kumar",
      role: "Parent",
      img: "testiimage",
      text: "The school provides a nurturing environment with excellent teachers. My child loves coming to school every day!",
    },
    {
      name: "Lakshmi Devi",
      role: "Parent",
      img: "testiimage",
      text: "The school provides a nurturing environment with excellent teachers. My child loves coming to school every day!",
    },
    {
      name: "Rahul Sharma",
      role: "Parent",
      img: "testiimage",
      text: "The school provides a nurturing environment with excellent teachers. My child loves coming to school every day!",
    },
    {
      name: "Priya Singh",
      role: "Parent",
      img: "testiimage",
      text: "The school provides a nurturing environment with excellent teachers. My child loves coming to school every day!",
    },
  ];

  return (
    <section className="testimonials-area section-gap">
      <div className="container">
        <div className="pb-5">
      <SectionTitle
      subtitle="Testimonials"
      title="What Our Students"
      highlight="Say's"
      align="center"

      />
      </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
             <div className="testimonial-card">

  {/* Quote Icon */}
  <div className="quote-badge">
    <FaQuoteRight />
  </div>

  {/* Stars */}
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} />
    ))}
  </div>

  {/* Text */}
  <p className="testimonial-text">{item.text}</p>

  {/* User */}
  <div className="testimonial-user">
    <img src={ testiimage } alt="Testimonial image" />
    <div className="user-info">
      <h6>{item.name}</h6>
      <span>{item.role}</span>
    </div>
  </div>

</div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}