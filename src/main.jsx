
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import News from './Pages/News.jsx';
import Coin from './Pages/Coin.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/News",
    element:  <News />,
  },
  {
    path: "/Coin",
    element:  <Coin />,
  },
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);