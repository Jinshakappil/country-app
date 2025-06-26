
// export default Slider;
import React, { useState } from "react";
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
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={slides[index].left}
          // alt="Left"
          alt={`Slide ${index + 1}`}

          style={{
          
            marginRight: "10px",
            objectFit: "cover", // optional: crop/scale nicely
            width: "600px",
             height: "200px",
          }}
        />
        <img
          src={slides[index].right}
          // alt="Right"
          alt={`Slide ${index - 1}`}
          style={{
            width: "100px",
             height: "200px",
            objectFit: "cover",
            caretColor: 'transparent'
          }}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2">
        <span
          onClick={prev}
          style={{ cursor: "pointer", fontSize: "20px", marginRight: "10px" }}
        >
          ←
        </span>

        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: i === index ? "#000" : "#ccc",
              margin: "0 4px",
              cursor: "pointer",
            }}
          />
        ))}

        <span
          onClick={next}
          style={{ cursor: "pointer", fontSize: "20px", marginLeft: "10px" }}
        >
          →
        </span>
      </div>
      {/* <div className="d-flex justify-content-center mt-2">
        <span 
          onClick={prev}
          style={{ cursor: 'pointer', fontSize: '24px', marginRight: '20px' }}
        >
          ←
        </span>
        <span 
          onClick={next}
          style={{ cursor: 'pointer', fontSize: '24px' }}
        >
          →
        </span>
      </div> */}
    </div>
  );
};

export default Slider;
