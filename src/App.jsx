import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About/About";
import Projects from "./Components/Header/Projects/Projects";

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
