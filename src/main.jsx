import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRouter from './MainRouter.jsx';
import Home from './Componente/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouter />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container m-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
