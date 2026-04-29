import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../styles/Button.css";

export default function CustomButton({
  text,
  to,
  onClick,
  variant = "primary", // primary | secondary | outline
  showIcon = true,
  className = "",
}) {
  const classes = `custom-btn ${variant} ${className}`;

  // If routing link
  if (to) {
    return (
      <Link to={to} className={classes}>
        {text}
        {showIcon && <FaArrowRight className="btn-icon" />}
      </Link>
    );
  }

  // Normal button
  return (
    <button className={classes} onClick={onClick}>
      {text}
      {showIcon && <FaArrowRight className="btn-icon" />}
    </button>
  );
}