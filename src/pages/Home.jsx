import React from "react";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <BannerSlider /> {/* 👈 este es el componente dinámico que rota imágenes */}

      <section className="product-section">
        <ItemListContainer />
      </section>
    </div>
  );
};

export default Home;



