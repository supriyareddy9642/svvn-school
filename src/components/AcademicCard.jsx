import { Card, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function AcademicCard({ img, title, desc }) {
  return (
    <Card >
      <div className="card-img-top">
        <img src={img} alt={title} className="img-fluid" />
      </div>

      <Card.Body>
        <Card.Title className="heading">{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>

        <CustomButton text="Apply Now" to="/" variant="primary" />
               
      </Card.Body>
    </Card>
  );
}