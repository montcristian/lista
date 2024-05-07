import './Boton.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Registro from './layouts/components/auth/Registro.jsx';
import ListaRegistro from './layouts/components/pages/ListaRegistro.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

let router = createBrowserRouter([
    {
        path: "/registro",
        element: <Registro />
    },
    {
        path: "/listaRegistro",
        element: <ListaRegistro />
    },
    {
        path: "/",
        element: <App/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);