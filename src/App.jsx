import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Layout from './components/paginas/Layout';
import Home from './components/paginas/Home';
import NoPage from './components/Paginas/NoPage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { collection, getDocs, getFirestore } from "firebase/firestore";

function App() {
  const [celulares, setCelulares] = useState([]); // Estado para almacenar los documentos de la colección
  const db = getFirestore();

  useEffect(() => {
    const fetchCelulares = async () => {
      try {
        const celularesRef = collection(db, "celulares"); // Referencia a la colección "celulares"
        const snapshot = await getDocs(celularesRef); // Obtener todos los documentos
        const items = snapshot.docs.map(doc => ({
          id: doc.id, // ID único del documento
          ...doc.data(), // Datos del documento
        }));
        setCelulares(items); // Guardar los documentos en el estado
      } catch (error) {
        console.error("Error al obtener los celulares:", error);
      }
    };

    fetchCelulares();
  }, [db]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            index 
            element={<Home celulares={celulares} />} // Pasamos los datos a Home
          />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;