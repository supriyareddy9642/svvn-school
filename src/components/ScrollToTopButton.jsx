import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollToTop.css";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
}