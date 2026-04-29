import divider from "../assets/devider.png";
import "../styles/SectionTitle.css";

export default function SectionTitle({
  subtitle,
  title,
  highlight,
  align = "left",
}) {
  return (
    <div className={`section-title text-${align}`}>
      
      {subtitle && <span className="top-head">{subtitle}</span>}

      <h2 className="heading">
        {title}{" "}
        {highlight && (
          <span className="gradient-text heading position-relative">
            <img src={divider} alt="divider" className="devider" />
            {highlight}
          </span>
        )}
      </h2>

    </div>
  );
}