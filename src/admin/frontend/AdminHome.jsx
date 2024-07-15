import React from "react";
import AdminNav from "../../component/adminHome/adminNav";
import HomeHero from "../../component/adminHome/homehero";
import ValuableclientTable from "../../component/adminHome/valuableclientTable";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminHome = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <main className="flex bg-gray-200 py-28">
      <AdminNav />
      <div className="w-full px-2 py-6 bg-gray-200 rounded-lg mr-14">
        <HomeHero />
        <ValuableclientTable />
      </div>
    </main>
  );
};

export default AdminHome;
