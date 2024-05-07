import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css"; 

function Registro({ onSubmit }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    nota: "",
  });

  const handleChange = (campo, valor) => {
    setFormData({ ...formData, [campo]: valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit(formData);
    }
    // Limpiar el formulario después de guardar los datos
    setFormData({
      nombre: "",
      apellido: "",
      edad: "",
      email: "",
      nota: "",
    });
  };

  
  return (
   
    <div className="registro-container"> {/* Aplica la clase de contenedor */}
    <div className="titulo"><h2>Registro de Estudiantes</h2>
      <form onSubmit={handleSubmit} className="registro-form"> {/* Aplica la clase de formulario */}
        <label>
          Nombre:
          <input type="text" value={formData.nombre} onChange={(e) => handleChange("nombre", e.target.value)} className="registro-input" /> {/* Aplica la clase de input */}
        </label>
        <label>
          Apellido:
          <input type="text" value={formData.apellido} onChange={(e) => handleChange("apellido", e.target.value)} className="registro-input" />
        </label>
        <label>
          Edad:
          <input type="number" value={formData.edad} onChange={(e) => handleChange("edad", e.target.value)} className="registro-input" />
        </label>
        <label>
          Correo electrónico:
          <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="registro-input" />
        </label>
        <label>
          Nota del curso:
          <input type="number" value={formData.nota} onChange={(e) => handleChange("nota", e.target.value)} className="registro-input" />
        </label>
        <button type="submit" className="registro-button">Registrar</button> {/* Aplica la clase de botón */}
        
      </form>
    </div>
    </div>
    
  );
}

export default Registro;
