import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service,";
import NavBar from "./component/NavBar";
import Footer from "./component/footer";
// Your JSON data
const routesData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Service ",
    link: "/service",
    dropdown: [
      {
        title: "Annual Maintenance Service",
        link: "/annual",
      },
      {
        title: "Backup Service",
        link: "/backup",
      },
      {
        title: "Bare Metal Server",
        link: "/bare",
      },
      {
        title: "Colocation",
        link: "/colocation",
      },
      {
        title: "Backup & Replication",
        link: "/backup",
      },
      {
        title: " Enterprise Secure E-mail",
        link: "/enterprise",
      },
      {
        title: "Setup",
        link: "/setup",
      },
      {
        title: "Web Development",
        link: "/webdevelopment",
      },
      {
        title: "Web Hosting",
        link: "/webhosting",
      },
    ],
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function App() {
  return (
    <Router>
     
        <NavBar />
  
      <Routes>
        {/* Dynamically generate routes from JSON data */}
        {routesData.map((route, index) => {
          if (route.dropdown) {
            return (
              <Route
                key={index}
                path={route.link}
                element={<Service dropdown={route.dropdown} />}
              />
            );
          } else {
            return (
              <Route
                key={index}
                path={route.link}
                element={
                  route.link === "/" ? (
                    <Home />
                  ) : route.link === "/about" ? (
                    <About />
                  ) : route.link === "/contact" ? (
                    <Contact />
                  ) : null
                }
                exact={route.link === "/"}
              />
            );
          }
        })}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
