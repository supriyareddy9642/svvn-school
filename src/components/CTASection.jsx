import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import '../styles/CTA.css';

export default function CTASection() {
  return (
    <section className="cta-area">
      <Container>
        <div className="cta-bg text-center">
          <h2 className="heading">
            Begin a journey of learning and excellence
          </h2>
          <p>Enroll Today and Shape a Brighter Tomorrow.</p>

          <CustomButton text="Enroll Now" to="/" className="white-bg black" />
            
         
        </div>
      </Container>
    </section>
  );
}