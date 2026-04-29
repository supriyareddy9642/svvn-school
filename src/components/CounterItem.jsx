import { useEffect, useState, useRef } from "react";

export default function CounterItem({ icon, target, title }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  // Detect when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      startVal += increment;
      if (startVal >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, target]);

  return (
    <div ref={ref} className="counter-box position-relative">
      <div className="counter-icon">{icon}</div>
      <span className="counter">{count}</span>
      <span className="plus">+</span>
      <p className="counter-title">{title}</p>
    </div>
  );
}