import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NuevoCliente,{action as actionNuevoCliente} from './pages/NuevoCliente';
import Index,{loader as clientesLoader} from './pages/Index';
import ErrorPage from './components/ErrorPage';
import EditarClientes,{loader as clienteModificarLoader, action as actionEditarCliente} from './pages/EditarClientes';
import { action as eliminarCliente } from './components/Clientes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index:true,
        element:<Index/>,
        loader:clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: actionNuevoCliente,
        errorElement:<ErrorPage/>
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarClientes/>,
        loader: clienteModificarLoader,
        errorElement: <ErrorPage/>,
        action:actionEditarCliente
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action:eliminarCliente
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
