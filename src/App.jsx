import React from 'react'
import Projects from './components/Projects'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import About from './pages/About';
import Create from './pages/Create';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
    
  ]);

  return <RouterProvider router={router}/>;
}
