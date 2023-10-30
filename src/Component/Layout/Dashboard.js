import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserFriends, FaUsers } from "react-icons/fa";
// import { url } from "../Util/url";
// import '../Css/Dashboard.css'

const Dashboard = () => {

   const [allPatient, setAllPatient] = useState(undefined);
   const [appointments, setAppointments] = useState(undefined);
   const navigate = useNavigate()
   

  //  useEffect(() => {
  //     getAllPatient();
  //     getAllAppointments()
  //  }, [])

  let url = "https://giksindia.com/app/api"
  // let url = "http://localhost:4500/api";

  //  const getAllPatient = async() => {
  //     const response = await axios.get(`${url}/patient/get_patient`)
  //     setAllPatient(response.data.data)
  //  }

//  const getAllAppointments = async () => {
//    const date = new Date().toISOString().split("T")[0];
//    const response = await axios.get(`${url}/appointment/get_specific_date_appointment_list/${date}`)
//    setAppointments(response.data.data)
//  }


  return (
    <section className="dashboard-overview">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
              <span className="bar one"></span>Overview<span className="bar two"></span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="dash-card" onClick={()=> navigate("/dashboard/blogs")}>
              <div className="dash-card-inner">
                <div className="left">
                  <FaUsers />
                </div>
                <div className="right">
                  <p className="patient-number"></p>
                  <p className="dash-card-title">All Blogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
