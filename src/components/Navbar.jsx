import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import logo from "../assets/logo.jpg";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" className="my-logo" />
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Menu */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav mx-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
            <Nav.Link as={Link} to="/admissions">Admissions</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

          </Nav>

          {/* Desktop Button */}
          <Link to="/apply" className="apply-btn d-none d-md-block">
            Apply Now
          </Link>

          {/* Mobile Button */}
          <Link to="/apply" className="apply-btn d-md-none">
            Call Now
          </Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
