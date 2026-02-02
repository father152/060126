import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About/About";
import Projects from "./Components/Header/Projects/Projects";
import Photo from "./Components/Header/Photo/Photo";
import Contact from "./Components/Header/Contact/Contact";
import Firsthouse from "./Components/Header/Projects/Firsthouse";
import Secondhouse from "./Components/Header/Projects/Secondhouse"; 
import ScrollToTop from "./Components/ScrolToTop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {           
          index: true,
          element: (
            <>
              <ScrollToTop />
              <Home />
            </>
          ),
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
        {
          path: "/firsthouse",
          element: <Firsthouse />,
        },
        {
          path: "/secondhouse",
          element: <Secondhouse />,
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
