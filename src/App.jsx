import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About/About";
import Projects from "./Components/Header/Projects/Projects";
import Photo from "./Components/Header/Photo/Photo";
import Contact from "./Components/Header/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
       {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/photo",
          element: <Photo />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="app">
      <RouterProvider router={router} />
        </div>
    </>
  );
}

export default App;
