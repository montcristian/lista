import React, { useState } from "react";
import Registro from "./layouts/components/auth/Registro";
import ListaRegistro from "./layouts/components/pages/ListaRegistro";
import { useNavigate } from "react-router-dom";

function App() {
  const [registros, setRegistros] = useState([]);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setRegistros([...registros, data]);
  };

  const handleVerRegistrosClick = () => {
    navigate("/listaRegistro", { state: { registros } }); // Redirige a la página de lista de registros con los registros como estado
  };

  return (
    <div>
     
      <Registro onSubmit={onSubmit} />
      <button className="ver-registros-button" onClick={handleVerRegistrosClick}>Ver Registros</button>
 {/* Botón de redirección a la página de lista de registros */}
    </div>
  );
}

export default App;
