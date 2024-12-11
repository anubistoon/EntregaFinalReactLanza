import { Link } from "react-router-dom";
import "./paginas.css";

function NoPage() {
  return (
    <div className="titulo vh-100" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Página no encontrada!</h2>
      
      {/* Mostrar imagen error404 */}
      <img 
        src="https://res.cloudinary.com/dpluvkh95/image/upload/v1733883445/error404_d5i0vc.webp" 
        alt="Error 404" 
        style={{ width: '50%', marginTop: '20px', borderRadius: '10px' }} 
      />
      
      <p><Link to={"/"}>Volver</Link></p>
    </div>
  );
}

export default NoPage;
