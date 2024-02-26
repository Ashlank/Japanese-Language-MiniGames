import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Memory from './pages/Memory';
import Write from './pages/Write';
import Guess from './pages/Guess';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/guess",
    element: <Guess />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/memory",
    element: <Memory />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

