"use client";
import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service/colocation";
import NavBar from "./component/NavBar";
import Footer from "./component/footer.jsx";
import AdminAbout from "./admin/frontend/AdminAbout";
import AdminContact from "./admin/frontend/AdminContact";
import AdminService from "./admin/frontend/AdminService";
import AdminHome from "./admin/frontend/AdminHome";
import ShowFooter from "./component/footer/showfooter.jsx";
import ServicePage from "./pages/servicePage.jsx";
import Services from "./pages/services.jsx";
import AdminServiceSub from "./component/adminService/AdminServiceSub.jsx";

const routesData = [
  {
    title: "Home",
    link: "/",
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
    link: "/adminhome",
  },
  {
    title: "AdminContact",
    link: "/admincontact",
  },
  {
    title: "AdminService",
    link: "/adminservice",
  },
  {
    title: "AdminServicePage",
    link: "/adminservicepage/:id",
  },

  {
    title: "",
    link: "/services/:id",
  },
];

function App() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // //Navbar
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos < 10 || prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };
  return (
    <main className="w-screen overflow-x-hidden font-abc">
      <Router>
        <div>
          <Routes>
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
                      ) : route.link === "/adminabout" ? (
                        <AdminAbout />
                      ) : route.link === "/adminhome" ? (
                        <AdminHome />
                      ) : route.link === "/admincontact" ? (
                        <AdminContact />
                      ) : route.link === "/adminservice" ? (
                        <AdminService />
                      ) : route.link === "/adminservicepage/:id" ? (
                        <AdminServiceSub />
                      ) : route.link === "/services" ? (
                        <Services />
                      ) : route.link === "/services/:id" ? (
                        <ServicePage />
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
          <div className={visible ? "fixed top-0 w-full z-50" : "hidden"}>
            <NavBar />
          </div>
        </div>
        <ShowFooter>
          <Footer />
        </ShowFooter>
      </Router>
    </main>
  );
}

export default App;
