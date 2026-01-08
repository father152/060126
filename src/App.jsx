import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About/About";


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
