import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service/colocation";
import NavBar from "./component/NavBar";
import Footer from "./component/footer";
import AdminAbout from "./admin/frontend/AdminAbout";
import AdminContact from "./admin/frontend/AdminContact";
import AdminServices from "./admin/frontend/AdminServices";
import AdminHome from "./admin/frontend/AdminHome";
import Colocation from "./pages/service/colocation";
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
  {
    title: "AdminAbout",
    link: "/adminabout",
  },
  {
    title: "AdminHome",
    link: "/adminHome",
  },
  {
    title: "AdminContact",
    link: "/admincontact",
  },
  {
    title: "AdminServices",
    link: "/adminservices",
  },
];

function App() {
  return (
    <main className="w-screen overflow-x-hidden">
      <Router>
        <div className="">
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
                      ) : route.link === "/service" ? (
                        <Service />
                      ) : route.link === "/contact" ? (
                        <Contact />
                      ) : route.link === "/colocation" ? (
                        <Colocation />
                      ) : route.link === "/cms" ? (
                        <cmshome />
                      ) : route.link === "/adminabout" ? (
                        <AdminAbout />
                      ) : route.link === "/adminHome" ? (
                        <AdminHome />
                      ) : route.link === "/admincontact" ? (
                        <AdminContact />
                      ) : route.link === "/adminservices" ? (
                        <AdminServices />
                      ) : null
                    }
                    exact={route.link === "/"}
                  />
                );
              }
            })}
          </Routes>
        </div>
        <div className="fixed top-0 w-[100%] ">
          <NavBar />
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
