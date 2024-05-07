import React from "react";
import { useLocation } from "react-router-dom";
import "./ListaRegistro.css"; // Importa tu archivo de estilos CSS

function ListaRegistro() {
  const location = useLocation();
  const registros = location.state && location.state.registros;

  return (
    <div className="registros-container"> {/* Aplica la clase de contenedor */}
      <h2>Registros:</h2>
      <ul className="registros-list"> {/* Aplica la clase de lista */}
        {registros && registros.map((registro, index) => (
          <li key={index} className="registros-item"> {/* Aplica la clase de elemento de lista */}
            Nombre: {registro.nombre}, Apellido: {registro.apellido}, Edad: {registro.edad}, Correo: {registro.email}, Nota: {registro.nota}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaRegistro;
