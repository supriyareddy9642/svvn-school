import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import "../styles/Footer.css";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Footer() {
  return (
    <footer className="footer-area">
      <Container>
        <Row>

          {/* ABOUT */}
          <Col lg={4} md={6} className="footer-col pb-3">
            <h5 className="footer-title">About School</h5>
            <p className="white">
              We provide quality education from Nursery to 10th standard,
              focusing on academic excellence, discipline, and overall
              development of every child.
            </p>

            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col lg={2} md={6} className="footer-col pb-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* USEFUL LINKS */}
          <Col lg={3} md={6} className="footer-col pb-3">
            <h5 className="footer-title">Useful Links</h5>
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </Col>

          {/* CONTACT */}
          <Col lg={3} md={6} className="footer-col pb-3">
            <h5 className="footer-title">Contact Us</h5>

            <p className="white"><FaMapMarkerAlt /> 123 Street, Hyderabad, India</p>
            <p className="white"><FaPhoneAlt /> +91 98765 43210</p>
            <p className="white"><FaEnvelope /> contact@myschool.com</p>
          </Col>

        </Row>
      </Container>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <Container>
          <p className="white">
            © {new Date().getFullYear()} SVVN School. All Rights Reserved.
          </p>
        </Container>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}