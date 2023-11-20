import React from "react";
import Sidebar from "../Sidebar/Sibebar";
// import "../../Css/Dashboard.css";
import { Outlet,Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <section className="dashboard-area">
      <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container expand-container">
        <Link to='/' className="navbar-brand">
            <img src="/images/header-logo.png" className="img-fluid w-75" alt="main-logo" />
          </Link>
        </div>
      </nav>
    </header>
        <div className="row g-0">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10 outlet-wrapper">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
