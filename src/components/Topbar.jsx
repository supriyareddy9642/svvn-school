import { Container } from "react-bootstrap";
import { FaEnvelope, FaPhoneVolume, FaUniversity, FaUserGraduate, FaCalendarAlt, FaBriefcase, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar d-none d-md-inline">
      <Container className="d-flex justify-content-between">
        
        <div className="left-info">
          <span>
            <FaEnvelope /> contact@myschool.com
          </span>
          <span className="line">&nbsp;&nbsp; | &nbsp;&nbsp;</span>

          <span>
            <FaPhoneAlt /> +91 95506 61987
          </span>
        </div>

        <div className="right-links">
          <Link to="/campus">
            <FaUniversity /> Campus
          </Link>
          <span className="line">|</span>

          <Link to="/students">
            <FaUserGraduate /> Students
          </Link>
          <span className="line">|</span>

          <Link to="/events">
            <FaCalendarAlt /> Events
          </Link>
          <span className="line">|</span>

          <Link to="/careers">
            <FaBriefcase /> Careers
          </Link>
        </div>

      </Container>
    </div>
  );
}