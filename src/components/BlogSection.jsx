import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import divider from "../assets/devider.png";
import blogImg from "../assets/nursery.jpg"; // replace with your image
import SectionTitle from "./SectionTitle";
import CustomButton from "./CustomButton";
import "../styles/Blog.css";

export default function BlogSection() {
  const blogs = [
    {
      title:
        "The Importance of Holistic Education in Shaping a Child’s Future",
      desc:
        "Exploring how academics, sports, and cultural activities together nurture confident and responsible students.",
      img: blogImg,
    },
    {
      title:
        "How Extracurricular Activities Enhance Student Learning Beyond Classrooms",
      desc:
        "A look into how participation in sports, arts, and clubs builds life skills and leadership qualities.",
      img: blogImg,
    },
  ];

  return (
    <section className="blogs-area section-gap gray-bg">
      <Container>

        {/* Header */}
        <Row className="bottom-40 align-items-center">
          <Col md={8} className="about-content">
          <SectionTitle 
          subtitle="BLOG UPDATES"
              title=" Latest News &"
              highlight="Articles"
          />
                     </Col>

          <Col md={4} className="text-md-end d-none d-md-block">
            <CustomButton text="View Blogs" to="/blogs" variant="primary" />
                      
          </Col>
        </Row>

        {/* Blog Cards */}
        <Row>
          {blogs.map((blog, index) => (
            <Col md={6} key={index} className="cards1 mb-3">
              <BlogCard {...blog} />
            </Col>
          ))}
        </Row>
<Col md={4} className="text-md-end d-block d-md-none text-center pt-4">
           <CustomButton text="View Blogs" to="/blogs" variant="primary" />
       
          </Col>
      </Container>
    </section>
  );
}