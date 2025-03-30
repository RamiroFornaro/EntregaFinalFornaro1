// src/data/products.js

// ✅ Importamos imágenes con los nombres exactos que pasaste
import airMax from "../assets/images/nike.jpg";
import blazerMid from "../assets/images/nike2.jpg";
import airForce1 from "../assets/images/nike4.jpg";
import reactVision from "../assets/images/nike3.jpg";
import zoomFreak from "../assets/images/nike.jpg";

import airForce107 from "../assets/images/AIR+FORCE+1+'07.webp";
import airForce107LV8 from "../assets/images/AIR+FORCE+1+'07+LV8.webp";
import airForce1BG from "../assets/images/AIR+FORCE+1+BG.webp";
import airForce1LV83GS from "../assets/images/AIR+FORCE1LV83.webp";
import airForce1Mid07 from "../assets/images/AIR+FORCE+1+MID+'07.webp";
import airForce1Low from "../assets/images/AIRFORCE1LOW.webp";
import airForce107XX from "../assets/images/WMNS+AIR+FORCE+1+'07+XX.webp";
import airForce107LX from "../assets/images/WMNS+AIR+FORCE+1+'07+LX.webp";
import airForce1W from "../assets/images/W+AIR+FORCE+1+'07.webp";

export const products = [
  {
    id: "1",
    title: "Nike Air Force 1 '07",
    description: "Diseñadas para máxima comodidad y estilo urbano. Amortiguación Air visible en el talón.",
    price: 150,
    stock: 12,
    image: airMax,
    category: "nike",
  },
  {
    id: "2",
    title: "Nike Air Force 1 '07",
    description: "Diseñadas para máxima comodidad y estilo urbano. Amortiguación Air visible en el talón.",
    price: 130,
    stock: 9,
    image: blazerMid,
    category: "nike",
  },
  {
    id: "3",
    title: "Nike Air Force 1 '07",
    description: "Diseñadas para máxima comodidad y estilo urbano. Amortiguación Air visible en el talón.",
    price: 140,
    stock: 10,
    image: airForce1,
    category: "nike",
  },
  {
    id: "4",
    title: "Nike Air Force 1 '07",
    description: "Diseñadas para máxima comodidad y estilo urbano. Amortiguación Air visible en el talón.",
    price: 160,
    stock: 7,
    image: reactVision,
    category: "nike",
  },
  {
    id: "5",
    title: "Nike Air Force 1 '07",
    description: "Diseñadas para máxima comodidad y estilo urbano. Amortiguación Air visible en el talón.",
    price: 170,
    stock: 6,
    image: zoomFreak,
    category: "nike",
  },
  {
    id: "6",
    title: "Nike Air Force 1 '07",
    description: "Un clásico reinventado con una silueta icónica y amortiguación Air para máxima comodidad.",
    price: 150,
    stock: 12,
    image: airForce107,
    category: "nike",
  },
  {
    id: "7",
    title: "Nike Air Force 1 '07 LV8",
    description: "Versión premium del Air Force 1 con materiales de alta calidad y detalles exclusivos.",
    price: 160,
    stock: 10,
    image: airForce107LV8,
    category: "nike",
  },
  {
    id: "8",
    title: "Nike Air Force 1 BG",
    description: "Diseño juvenil con materiales duraderos y la misma comodidad clásica de Air Force 1.",
    price: 130,
    stock: 8,
    image: airForce1BG,
    category: "nike",
  },
  {
    id: "9",
    title: "Nike Air Force 1 LV8 3 (GS)",
    description: "Estilo audaz con detalles modernos en una versión especial de la serie LV8.",
    price: 140,
    stock: 10,
    image: airForce1LV83GS,
    category: "nike",
  },
  {
    id: "10",
    title: "Nike Air Force 1 Mid '07",
    description: "Versión de caña media con ajuste seguro y diseño retro inspirado en los años 80.",
    price: 155,
    stock: 9,
    image: airForce1Mid07,
    category: "nike",
  },
  {
    id: "11",
    title: "Nike Air Force 1 Low",
    description: "Un diseño atemporal con perfil bajo y amortiguación reactiva para el día a día.",
    price: 145,
    stock: 15,
    image: airForce1Low,
    category: "nike",
  },
  {
    id: "12",
    title: "Nike Air Force 1 '07 LX",
    description: "Materiales premium y detalles exclusivos para un look sofisticado y moderno.",
    price: 170,
    stock: 7,
    image: airForce107LX,
    category: "nike",
  },
  {
    id: "13",
    title: "Nike Air Force 1 '07 XX",
    description: "Una versión especial con detalles de lujo y un diseño llamativo.",
    price: 175,
    stock: 6,
    image: airForce107XX,
    category: "nike",
  },
  {
    id: "14",
    title: "Nike W Air Force 1 '07",
    description: "Edición femenina del icónico Air Force 1, con ajuste perfecto y materiales exclusivos.",
    price: 160,
    stock: 8,
    image: airForce1W,
    category: "nike",
  },
];
