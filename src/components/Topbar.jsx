import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaUniversity, FaUserGraduate, FaCalendarAlt, FaBriefcase, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar d-none d-md-block">
      <Container>
        <Row className="align-items-center">

          {/* LEFT SIDE */}
          <Col lg={6} md={6}>
            <div className="left-info">
              <span>
                <FaEnvelope /> contact@myschool.com
              </span>
              <span className="line">|</span>

              <span>
                <FaPhoneAlt /> +91 95506 61987
              </span>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6} md={6}>
            <div className="right-links text-end">
              <Link to="/campus"><FaUniversity /> Campus</Link>
              <span className="line">|</span>

              <Link to="/students"><FaUserGraduate /> Students</Link>
              <span className="line">|</span>

              <Link to="/events"><FaCalendarAlt /> Events</Link>
              <span className="line">|</span>

              <Link to="/careers"><FaBriefcase /> Careers</Link>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
