import { Carousel } from "react-bootstrap";
import img1 from "../assets/school-img1.webp";
import img2 from "../assets/school-img2.jpeg";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <Carousel fade interval={5000} controls={false} indicators={false}>
      
      <Carousel.Item className="hero-slide">
        <img src={img1} className="hero-img" />

        <div className="banner-text">
          <span>Be a part of our history</span>
          <h2>Shaping Young Minds from Nursery to 10th.</h2>
          <button className="hero-btn">Enroll Now</button>
        </div>
      </Carousel.Item>

      <Carousel.Item className="hero-slide">
        <img src={img2} className="hero-img" />

        <div className="banner-text">
          <span>Where Dreams Take Flight</span>
          <h2>A Journey of Knowledge and Growth Starts Here.</h2>
          <button className="hero-btn">Enroll Now</button>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}
