import { Container, Row, Col } from "react-bootstrap";
import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaTrophy, FaSchool } from "react-icons/fa";
import CounterItem from "./CounterItem";
import "../styles/Counter.css";

export default function CounterSection() {
  return (
    <section className="pt-5 pb-5 counter-section bottom-40">
      <Container>
        <Row className="text-center">

          <Col md={3} sm={6} xs={6}>
            <CounterItem icon={<FaUserGraduate />} target={500} title="Students" />
          </Col>

          <Col md={3} sm={6} xs={6}>
            <CounterItem icon={<FaChalkboardTeacher />} target={50} title="Teachers" />
          </Col>

          <Col md={3} sm={6} xs={6}>
            <CounterItem icon={<FaSchool />} target={25} title="Classrooms" />
          </Col>

         <Col md={3} sm={6} xs={6}>
            <CounterItem icon={<FaTrophy />} target={100} title="Awards" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}