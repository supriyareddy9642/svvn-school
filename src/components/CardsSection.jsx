import { Container, Row } from "react-bootstrap";
import CardItem from "./CardItem";
import icon from "../assets/iconservice-1.png"; // use your image
import '../styles/Cards.css';

export default function CardsSection() {
  
  const cardData = [
    {
      title: "Why study at SVVN?",
      description:
        "We provide a safe and inspiring learning environment where every child is encouraged to grow with confidence.",
    },
    {
      title: "Strong Academics",
      description:
        "We focus on clear concepts and smart learning. Students build a solid base for future success.",
    },
    {
      title: "Experienced Teachers",
      description:
        "Our skilled teachers guide every student with care. They make learning easy and enjoyable.",
    },
    {
      title: "Safe & Secure Campus",
      description:
        "We ensure a protected environment for every child. Safety and comfort are our top priorities.",
    },
  ];

  return (
    <section className="cards-area primary-bg">
      <Container>
        <Row>
          {cardData.map((card, index) => (
            <CardItem
              key={index}
              icon={icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}