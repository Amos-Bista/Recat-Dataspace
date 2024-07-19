// src/App.js
"use client";
import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormProvider } from "./component/about/formcontext.jsx";
import LoginForm from "./admin/login.jsx";
import AdminAdd from "./admin/frontend/AdminAdd.jsx";

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
  {
    title: "LoginForm",
    link: "/admin",
  },
  {
    title: "AdminAdd",
    link: "/adminAdd",
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

  // Navbar
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

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log({ isAuthenticated });

  return (
    <main className="w-screen overflow-x-hidden font-abc">
      <FormProvider>
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
                          isAuthenticated ? (
                            <AdminAbout />
                          ) : (
                            <Navigate to="/admin" />
                          )
                        ) : route.link === "/adminhome" ? (
                          isAuthenticated ? (
                            <AdminHome />
                          ) : (
                            <Navigate to="/admin" />
                          )
                        ) : route.link === "/admincontact" ? (
                          isAuthenticated ? (
                            <AdminContact />
                          ) : (
                            <Navigate to="/admin" />
                          )
                        ) : route.link === "/adminservice" ? (
                          isAuthenticated ? (
                            <AdminService />
                          ) : (
                            <Navigate to="/admin" />
                          )
                        ) : route.link === "/adminservicepage/:id" ? (
                          isAuthenticated ? (
                            <AdminServiceSub />
                          ) : (
                            <Navigate to="/admin" />
                          )
                        ) : route.link === "/services" ? (
                          <Services />
                        ) : route.link === "/services/:id" ? (
                          <ServicePage />
                        ) : route.link === "/admin" ? (
                          <LoginForm />
                        ) : route.link === "/adminAdd" ? (
                          isAuthenticated ? (
                            <AdminAdd />
                          ) : (
                            <Navigate to="/admin" />
                          )
                        ) : null
                      }
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
          <ToastContainer />
        </Router>
      </FormProvider>
    </main>
  );
}

export default App;




// // src/App.js
// "use client";
// import "./App.css";
// import { useState, useEffect } from "react";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Service from "./pages/service/colocation";
// import NavBar from "./component/NavBar";
// import Footer from "./component/footer.jsx";
// import AdminAbout from "./admin/frontend/AdminAbout";
// import AdminContact from "./admin/frontend/AdminContact";
// import AdminService from "./admin/frontend/AdminService";
// import AdminHome from "./admin/frontend/AdminHome";
// import ShowFooter from "./component/footer/showfooter.jsx";
// import ServicePage from "./pages/servicePage.jsx";
// import Services from "./pages/services.jsx";
// import AdminServiceSub from "./component/adminService/AdminServiceSub.jsx";
// import ContactInfoEdit from "./component/adminContact/contactinfoedit.jsx";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FormProvider } from "./component/about/formcontext.jsx";
// import LoginForm from "./admin/login.jsx";
// import AdminAdd from "./admin/frontend/AdminAdd.jsx";

// const routesData = [
//   {
//     title: "Home",
//     link: "/",
//   },
//   {
//     title: "About Us",
//     link: "/about",
//   },
//   {
//     title: "Contact",
//     link: "/contact",
//   },
//   {
//     title: "AdminAbout",
//     link: "/adminabout",
//   },
//   {
//     title: "AdminHome",
//     link: "/adminhome",
//   },
//   {
//     title: "AdminContact",
//     link: "/admincontact",
//   },
//   {
//     title: "AdminService",
//     link: "/adminservice",
//   },
//   {
//     title: "AdminServicePage",
//     link: "/adminservicepage/:id",
//   },

//   {
//     title: "",
//     link: "/services/:id",
//   }, {
//     title: "LoginForm",
//     link: "/admin",
//   },
//   {
//     title: "AdminAdd",
//     link: "/adminAdd",
//   },
// ];

// function App() {
//   useEffect(() => {
//     document.body.style.overflowX = "hidden";

//     return () => {
//       document.body.style.overflowX = "auto";
//     };
//   }, []);

//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   // Navbar
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(currentScrollPos < 10 || prevScrollPos > currentScrollPos);
//     setPrevScrollPos(currentScrollPos);
//   };

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <main className="w-screen overflow-x-hidden font-abc">
//       <FormProvider>
//         <Router>
//           <div>
//             <Routes>
//               {routesData.map((route, index) => {
//                 if (route.dropdown) {
//                   return (
//                     <Route
//                       key={index}
//                       path={route.link}
//                       element={<Service dropdown={route.dropdown} />}
//                     />
//                   );
//                 } else {
//                   return (
//                     <Route
//                       key={index}
//                       path={route.link}
//                       element={
//                         route.link === "/" ? (
//                           <Home />
//                         ) : route.link === "/about" ? (
//                           <About />
//                         ) : route.link === "/contact" ? (
//                           <Contact />
//                         ) : route.link === "/adminabout" ? (
//                         <AdminAbout />
//                         ) : route.link === "/adminhome" ? (
//                           <AdminHome />
//                         ) : route.link === "/admincontact" ? (
//                         <AdminContact />
//                         ) : route.link === "/adminservice" ? (
//                          <AdminService />
//                         ) : route.link === "/adminservicepage/:id" ? (
//                          <AdminServiceSub />
//                         ) : route.link === "/services" ? (
//                           <Services />
//                         ) : route.link === "/services/:id" ? (
//                           <ServicePage />
//                         ) : route.link === "/admin" ? (
//                           <LoginForm />
//                         ) : route.link === "/adminAdd" ? (
//                      <AdminAdd />
//                         ) : null
//                       }
//                     />
//                   );
//                 }
//               })}
//             </Routes>
//           </div>

//           <div className="fixed top-0 w-[100%] ">
//             <div className={visible ? "fixed top-0 w-full z-50" : "hidden"}>
//               <NavBar />
//             </div>
//           </div>
//           <ShowFooter>
//             <Footer />
//           </ShowFooter>
//           <ToastContainer />
//         </Router>
//       </FormProvider>
//     </main>
//   );
// }

// export default App;
