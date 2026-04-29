import { useState } from "react";
import { Container } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaSearchPlus } from "react-icons/fa";
import "../styles/Gallery.css";
import SectionTitle from "./SectionTitle";

// Images
import img1 from "../assets/celebration2.jpeg";
import img2 from "../assets/celebration3.jpeg";
import img3 from "../assets/event2.jpeg";
import img4 from "../assets/event3.jpeg";
import img5 from "../assets/prize2.jpeg";
import img6 from "../assets/sports1.jpeg";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  // ✅ Clean data (no duplicates, multi-category support)
  const items = [
    {
      id: 1,
      img: img1,
      category: ["Celebrations"],
      title: "Celebrations",
    },
   
    {
      id: 3,
      img: img3,
      category: ["Events"],
      title: "Events",
    },
     {
      id: 2,
      img: img2,
      category: ["Celebrations"],
      title: "Celebrations",
    },
    {
      id: 4,
      img: img4,
      category: ["Celebrations", "Events"],
      title: "Celebrations",
    },
    {
      id: 6,
      img: img6,
      category: ["Sports"],
      title: "Sports",
    },
    {
      id: 5,
      img: img5,
      category: ["Events"],
      title: "Events",
    },
    
  ];

  // ✅ Filter Logic (no duplicates in "All")
  let filtered = [];

  if (filter === "All") {
    const uniqueMap = new Map();

    items.forEach((item) => {
      if (!uniqueMap.has(item.id)) {
        uniqueMap.set(item.id, item);
      }
    });

    filtered = Array.from(uniqueMap.values());
  } else {
    filtered = items.filter((item) =>
      item.category.includes(filter)
    );
  }

  return (
    <section className="gallery-area section-gap">
      <Container>

        {/* Section Title */}
        <div className="text-center">
          <SectionTitle
            subtitle="School Gallery"
            title="Our Beautiful"
            highlight="Memories"
            align="center"
          />
        </div>

        {/* Filters */}
        <div className="filter-group text-center">
          {["All", "Events", "Sports", "Classrooms", "Celebrations", "Labs"].map(
            (f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            )
          )}
        </div>

        {/* Gallery */}
        <PhotoProvider>
          <div className="masonry-grid">
            {items.map((item, i) => {
              const isVisible =
                filter === "All"
                  ? filtered.find((f) => f.id === item.id)
                  : item.category.includes(filter);

              return (
                <div
                  key={i}
                  className={`masonry-item ${
                    isVisible ? "show" : "hide"
                  }`}
                >
                  <PhotoView src={item.img} title={item.title}>
                    <div className="gallery-card">
                      <img src={item.img} alt={item.title} />

                      {/* Overlay (icon only) */}
                      <div className="overlay">
                        <FaSearchPlus className="zoom-icon" />
                      </div>
                    </div>
                  </PhotoView>
                </div>
              );
            })}
          </div>
        </PhotoProvider>

      </Container>
    </section>
  );
}