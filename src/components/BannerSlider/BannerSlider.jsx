import React, { useEffect, useState } from "react";
import "../../styles/BannerSlider.css";
import banner1 from "../../assets/images/banner1.webp";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.webp";

const banners = [
  {
    image: banner1,
    title: "Air Force 1",
    subtitle: "Estilo icónico, ahora renovado.",
  },
  {
    image: banner2,
    title: "Street Drop",
    subtitle: "Perfectas para la ciudad",
  },
  {
    image: banner3,
    title: "Black Edition",
    subtitle: "Fuerza y presencia total",
  },
];

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider">
      {banners.map((banner, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
        >
          <img src={banner.image} alt={banner.title} className="slide-image" />
          {i === index && (
            <div className="slide-content">
              <h1>{banner.title}</h1>
              <p>{banner.subtitle}</p>
              <button className="banner-button">Ver catálogo</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;



