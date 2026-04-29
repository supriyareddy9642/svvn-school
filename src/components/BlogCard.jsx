import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ img, title, desc }) {
  return (
    <div className="custom-card bg-white">
      
      <div className="icon">
        <img src={img} alt="blog" className="img-fluid" />
      </div>

      <h5 className="heading gradient-text">{title}</h5>

      <p className="text-center">{desc}</p>

      <div className="arrow">
        <FaArrowRight />
      </div>

    </div>
  );
}