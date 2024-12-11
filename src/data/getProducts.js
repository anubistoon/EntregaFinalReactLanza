const products = [
  {
    id: "XM123456",
    name: "Redmi 13 Pro",
    model: "Redmi",
    description: "Celular de alta gama con cámara Leica y carga rápida.",
    stock: 5,
    category: "redmi",
    image: "http://localhost:5173/public/img/xiaomi-13-pro-black.webp"
  },
  {
    id: "XM789012",
    name: "Redmi Note 12 Pro",
    model: "Redmi",
    description: "Pantalla AMOLED, 120Hz y cámara de 200 MP.",
    stock: 8,
    category: "redmi",
    image: "http://localhost:5173/public/img/xiaomi-redmi-note-12-pro.webp"
  },
  {
    id: "XM345678",
    name: "Poco X5 Pro",
    model: "Poco",
    description: "Rendimiento destacado con Snapdragon 778G y carga de 67W.",
    stock: 10,
    category: "poco",
    image: "http://localhost:5173/public/img/xiaomi-poco-x5-pro-5g.webp"
  },
  {
    id: "XM901234",
    name: "Redmi 12 Lite",
    model: "Redmi",
    description: "Celular estilizado con cámara selfie de 32 MP.",
    stock: 7,
    category: "redmi",
    image: "http://localhost:5173/public/img/xiaomi-12-lite-5g-new.webp"
  },
  {
    id: "XM567890",
    name: "Redmi 10C",
    model: "Redmi",
    description: "Smartphone económico con batería de larga duración.",
    stock: 12,
    category: "redmi",
    image: "http://localhost:5173/public/img/xiaomi-redmi-10c.webp"
  },
  {
    id: "XM112233",
    name: "Mi 11 Ultra",
    model: "Redmi",
    description: "Celular premium con pantalla secundaria y cámara de 50 MP.",
    stock: 3,
    category: "redmi",
    image: "http://localhost:5173/public/img/xiaomi-mi11-ultra-5g-k1.webp"
  },
  {
    id: "XM445566",
    name: "Poco M5",
    model: "Poco",
    description: "Celular para gaming con MediaTek Helio G99.",
    stock: 9,
    category: "poco",
    image: "http://localhost:5173/public/img/xiaomi-poco-m5.webp"
  },
  {
    id: "XM778899",
    name: "Redmi Note 11",
    model: "Redmi",
    description: "Pantalla FHD+ AMOLED y batería de 5000 mAh.",
    stock: 15,
    category: "redmi",
    image: "http://localhost:5173/img/xiaomi-redmi-note-11-global.webp"
  }
];

const getProducts = new Promise((resolve, reject) => {
 
  setTimeout(() => {
    resolve(products);
  }, 1000);
});

export default getProducts;