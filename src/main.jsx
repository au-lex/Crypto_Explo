
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import News from './Pages/News.jsx';
import Coins from './Pages/Coins.jsx';




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
    path: "/Coins",
    element:  <Coins />,
  },
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);