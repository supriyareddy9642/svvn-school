import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate, FaArrowRight, FaIdBadge, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about-img.png";
import divider from "../assets/devider.png";
import "../styles/About.css";
import SectionTitle from "./SectionTitle";
import CustomButton from "./CustomButton";

export default function AboutSection() {
  return (
    <section className="about-area section-padding">
      <Container>
        <Row>
        <div className="d-block d-md-none">
             <SectionTitle
              subtitle="About Our School"
              title="A few words about the"
              highlight="School"
            />
          </div>
          {/* Left Image */}
          <Col md={6} className="about-us-image">
            <img src={aboutImg} alt="about" className="img-fluid pb-3" />
            <h3 className="heading about-text">Since 1992</h3>
          </Col>

          {/* Right Content */}
          <Col md={6} className="about-content">
          <div className="d-none d-md-block">
             <SectionTitle
              subtitle="About Our School"
              title="A few words about the"
              highlight="School"
            />
          </div>
            <p>
              Our school is a place where learning is joyful and every child is valued.
              We focus on building strong academics along with discipline and character.
              With experienced teachers and modern teaching methods, we make learning engaging.
              We believe education is not just about books, but about shaping a bright future.
              Here, every student is encouraged to dream big and achieve with confidence.
            </p>

            <div className="about-section">
              <div className="about-image">
                <FaHandshake />
              </div>

              <div className="about-content1">
                <h2 className="heading">Building Trust</h2>
                <p>We are committed to<br />building trust</p>
              </div>
            </div>

            <CustomButton text="Know More About Us" to="/" variant="primary" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}