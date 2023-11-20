import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col } from "react-bootstrap";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate, useLocation } from "react-router-dom";


const Login = () => {

  let [token, setToken] = useState(null);

    const loginModalRef = useRef(null);
    const navigate = useNavigate();
  const location = useLocation();
  const [responseMsg, setResponseMsg] = useState()

    const adminLoginHandler = useMutation(
        async (data) => {
          let url = "https://185.239.209.106:4800/app/api/authantication/login"
          const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          return await res.json();
        },
        {
          onSuccess: async(res) => {
            // responseMsg.value = await res.msg;
            if (res.status == 200) {
              
              loginModalRef.current.click();
              setToken(res.token);
              Cookies.set("giks_token", res.token, { expires: 7 }); // 'expires' sets the expiration time in days
              navigate("/dashboard");
            }
          },
          onError: (error) => {
            responseMsg.value = error.msg;
          },
        }
      );

      const loginSchema = Yup.object().shape({
        adminEmail: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      });

  return (
    <section>
             {/* -----------------Login Modal -------------------------- */}
      <div
        className="modal fade show common-booking-modal "
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
        style={{"display":"block"}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 py-0">
              <h1 className="modal-title fs-5" id="loginModalLabel">
                Admin Login
              </h1>
              <button
                ref={loginModalRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div>
                <Formik
                  initialValues={{
                    adminEmail: "",
                    password: "",
                  }}
                  validationSchema={loginSchema}
                  onSubmit={(values, { resetForm }) => {
                    adminLoginHandler.mutate(values, {
                      onSuccess: () => {
                        resetForm();
                      },
                    });
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Row>
                        <div className="form-group">
                          <label htmlFor="adminEmail">Email:</label>
                          <Field
                            name="adminEmail"
                            className="form-control text-dark"
                            autoComplete="new-email" /* Set a unique value */
                          />
                          <ErrorMessage
                            name="adminEmail"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="name">Password:</label>
                          <Field
                            name="password"
                            className="form-control text-dark"
                            type="password"
                            autoComplete="new-password" /* Set a unique value */
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </Row>

                      <button
                        type="submit"
                        className="common-submit  py-2 px-4 mt-4 border-0"
                        disabled={adminLoginHandler.isLoading}
                      >
                        {adminLoginHandler.isLoading ? "Loading..." : "Submit"}
                      </button>
                    </Form>
                  )}
                </Formik>
                {responseMsg && responseMsg.value ? (
                  <p>{responseMsg.value}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    
  )
}

export default Login