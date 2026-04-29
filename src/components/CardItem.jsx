import { Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export default function CardItem({ icon, title, description }) {
  return (
    <Col lg={3} md={6} className="cards">
      
      <div className="custom-card bg-white">
        <div className="icon">
          <img src={icon} alt="service" className="img-responsive" />
        </div>

        <h5 className="heading">{title}</h5>

        <div className="arrow">
          <FaArrowRight />
        </div>
      </div>

      <p className="text-center white">{description}</p>

    </Col>
  );
}