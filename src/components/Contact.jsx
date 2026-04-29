import { Container, Row, Col, Form } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section className="contact-area">
      <Container>
        <div className="pb-5">
        <SectionTitle
        subtitle="Contact Us"
        title="Contact for "
        highlight="any Query"
        align="center"

        />
        </div>
        <Row>

          {/* LEFT SIDE */}
          <Col lg={4} className="contact-info">
            <h3 className="contact-title primary-color">Get In Touch</h3>
            <p className="contact-desc">
              Have questions or want to know more about our school? Feel free to get in touch with us. We are always happy to assist parents and students with the information they need.
            </p>

            <div className="info-box">
              <div className="icon"><FaMapMarkerAlt /></div>
              <div>
                <h6>Address</h6>
                <p>29R6+26X, Kadapa, Nagavaram, Andhra Pradesh 516110</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon"><FaPhoneAlt /></div>
              <div>
                <h6>Mobile</h6>
                <p>9550661987</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon"><FaEnvelope /></div>
              <div>
                <h6>Email</h6>
                <p>contact@myschool.com</p>
              </div>
            </div>
          </Col>

          {/* MAP */}
          <Col lg={4} className="map-box">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.626918209402!2d79.3605982!3d14.040115399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2d55d2087947d%3A0x9a3e4b8e11c84455!2sS.V.VIDYANIKETHAN%20E.M%20SCHOOL!5e0!3m2!1sen!2sin!4v1777270429042!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>

          {/* FORM */}
          <Col lg={4}>
            <Form className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Control placeholder="Your Name" className="form-input" />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Your Email" className="form-input" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Control placeholder="Mobile" className="form-input" />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Subject" className="form-input" />
                </Col>
              </Row>

              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Leave a message here"
                className="form-input"
              />

              <button className="send-btn">Send Message</button>
            </Form>
          </Col>

        </Row>
      </Container>
    </section>
  );
}