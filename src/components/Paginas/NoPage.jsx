import { Link } from "react-router-dom";
import "./paginas.css"
function NoPage() {
  return (
    <div className="titulo vh-100">
    <h2>Página no encontrada!</h2>
    <p><Link to={"/"}>Volver</Link></p>
    </div>
  )
}

export default NoPage