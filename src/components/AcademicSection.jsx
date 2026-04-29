import { Container, Row, Col } from "react-bootstrap";
import AcademicCard from "./AcademicCard";
import nursery from "../assets/nursery.jpg";
import divider from "../assets/devider.png";
import '../styles/Academic.css';
import SectionTitle from "./SectionTitle";
import CustomButton from "./CustomButton";

export default function AcademicSection() {
  const data = [
    { title: "Nursery", desc: "Play-based curriculum focusing on sensory learning and social skills.", img: nursery },
    { title: "Primary (1-5)", desc: "Foundational literacy and numeracy with activity-based learning.", img: nursery },
    { title: "Secondary (6-10)", desc: "Subject-focused learning, assessments, and career guidance.", img: nursery },
  ];

  return (
    <section className=" section-gap secondary-bg academic-section">
      <Container>

        <Row className="mb-4 align-items-center">
          <Col md={8}>
            <SectionTitle
  subtitle="About Our Classes"
  title="Academic"
  highlight="  Programs"
/>
          </Col>

          <Col md={4} className="text-md-end d-none d-md-block">
           <CustomButton text="Admissions Open" to="/" variant="primary" />
       
          </Col>
        </Row>

        <Row>
          {data.map((item, i) => (
            <Col md={4} key={i} className="mb-3">
              <AcademicCard {...item} />
            </Col>
          ))}
        </Row>
         <Col md={4} className="text-md-end d-block d-md-none text-center pt-4">
           <CustomButton text="Admissions Open" to="/" variant="primary" />
       
          </Col>
      </Container>
    </section>
  );
}