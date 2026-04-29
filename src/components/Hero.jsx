import { Carousel } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/school-img1.webp";
import img2 from "../assets/school-img2.jpeg";
import "../styles/Hero.css";
import CustomButton from "./CustomButton";

export default function Hero() {
  return (
    
    <Carousel
      fade
      interval={6000}
      controls={false}   // ✅ arrows
      indicators={false} // ✅ dots
      pause={false}     // ✅ continuous autoplay
    >
      {/* Slide 1 */}
      <Carousel.Item className="hero-slide">
        <img src={img1} alt="Slide 1" className="hero-img" />

        <div className="banner-text">
          <span>Be a part of our history</span>
          <h2 className="heading">
            Shaping Young Minds from Nursery to 10th.
          </h2>
          <CustomButton text="Enroll Now" to="/" variant="primary" />
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item className="hero-slide">
        <img src={img2} alt="Slide 2" className="hero-img" />

        <div className="banner-text">
          <span>Where Dreams Take Flight</span>
          <h2 className="heading">
            A Journey of Knowledge and Growth Starts Here.
          </h2>
          <CustomButton text="Enroll Now" to="/" variant="primary" />
       
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
