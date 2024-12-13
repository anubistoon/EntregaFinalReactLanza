import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarritoProvider } from './context/CarritoContext';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Paginas/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NoPage from './components/Paginas/NoPage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { collection, getDocs, getFirestore } from "firebase/firestore";

function App() {
  const [celulares, setCelulares] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchCelulares = async () => {
      try {
        const celularesRef = collection(db, "celulares");
        const snapshot = await getDocs(celularesRef);
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCelulares(items);
      } catch (error) {
        console.error("Error al obtener los celulares:", error);
      }
    };

    fetchCelulares();
  }, [db]);

  return (
    <CarritoProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home celulares={celulares} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
