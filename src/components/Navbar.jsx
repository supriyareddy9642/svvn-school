import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/Navbar.css";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="my-logo" />
        </Navbar.Brand>

        {/* Mobile center button */}
        <div className="mobile-call d-lg-none">
          <Link to="/apply">Call Now</Link>
        </div>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mx-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
            <Nav.Link as={Link} to="/admissions">Admissions</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

          </Nav>

          <Link to="/apply" className="apply-btn d-none d-lg-block">
            Apply Now
          </Link>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
