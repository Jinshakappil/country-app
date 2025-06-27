

import React, { useState } from "react";

// Import your images
import img1a from "../assets/home-page-pic-1.PNG";
import img1b from "../assets/home-page-pic-2.PNG";
import img2a from "../assets/home-page-pic-2.PNG";
import img2b from "../assets/home-page-pic-1.PNG";

const slides = [
  { left: img1a, right: img1b },
  { left: img2a, right: img2b },
];

const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <div className="position-relative">
      {/* Slide images */}
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
        <img
          src={slides[index].left}
          alt="Left"
          className="img-fluid"
          style={{
            maxWidth: "100%",
            // width: "45%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <img
          src={slides[index].right}
          alt="Right"
          className="img-fluid"
          style={{
            maxWidth: "100%",
            // width: "45%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Navigation */}
      <div className="d-flex align-items-center justify-content-center mt-3">
        <span
          onClick={prev}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            marginRight: "10px",
            userSelect: "none",
          }}
        >
          ←
        </span>

        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: i === index ? "#000" : "#ccc",
              margin: "0 4px",
              cursor: "pointer",
            }}
          />
        ))}

        <span
          onClick={next}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            marginLeft: "10px",
            userSelect: "none",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
};

export default Slider;
