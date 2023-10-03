import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {FaTimes} from 'react-icons/fa'

const Careers = () => {
  const [verified, setVerified] = useState(false);
  const [msg, setMsg] = useState(undefined);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset: resetCarrerForm,
  } = useForm({
    mode: "onBlur",
  });

  function onChange(value) {
    setVerified(true);
  }

  const handleCarrerForm = async (data) => {
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("experience", data.experience);
    formData.append("lastCompany", data.lastCompany);
    formData.append("qualification", data.qualification);
    formData.append("file", data.file);

    // let url = "http://localhost:4500/api/career";
    let url = "http://185.239.209.106:4500/api/career"

    try {
      let response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response) {
        resetCarrerForm();
        setVerified(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="about-who-we-are career">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8">
              <div className="about-single-content">
                <h1 className="common-heading">Why Work With GIKS</h1>
                <p className="common-para">
                  By choosing to work with us, you gain access to a
                  comprehensive portfolio of services tailored to meet your
                  specific needs. Our client-centric approach ensures that we
                  listen to your requirements, develop customized solutions, and
                  deliver outstanding results. With cutting-edge technology,
                  reliable support, scalability, and cost efficiency as our
                  pillars, we empower your business to thrive in a fast-paced
                  and competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="career-acoordian">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="common-heading mb-lg-5">Current Opportunities</h1>
            </div>
            <div className="col-lg-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div>
                        {" "}
                        <p className="acc-heading ">
                          Business development Executive
                        </p>
                        <p className="acc-subheading">Full Time</p>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="acc-bdy-left">
                            <p className="experience">Experience</p>
                            <p className="acc-subheading">Fresher can Apply</p>
                            <button
                              type="button"
                              className="common-btn mt-lg-4 mt-md-4 mt-sm-3 mt-2 d-inline-block bg-transparent"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <p className="common-para">
                            We are currently seeking a highly motivated and
                            talented individual to join our team as a Business
                            Development Executive. If you are passionate about
                            driving growth, building strong relationships, and
                            identifying new business opportunities, then this
                            could be the perfect role for you.
                          </p>
                          <p className="fw-bold text-white common-para mb-0 pb-0">
                            Job Responsibilities:
                          </p>
                          <p className="common-para">
                            As a Business Development Executive, you will play a
                            crucial role in driving the company's growth and
                            expanding our customer base. Your responsibilities
                            will include:
                          </p>
                          <p className="common-para circle">
                            Identifying and pursuing new business opportunities:
                            Researching and analyzing market trends, identifying
                            potential clients, and proactively reaching out to
                            them to establish partnerships or secure new
                            projects.
                          </p>
                          <p className="common-para circle">
                            Building and maintaining relationships: Cultivating
                            strong relationships with existing clients,
                            understanding their needs, and identifying
                            opportunities for upselling or cross-selling our
                            products/services.
                          </p>
                          <p className="common-para circle">
                            Developing sales strategies: Collaborating with the
                            sales and marketing teams to develop effective sales
                            strategies, including setting targets, creating
                            compelling proposals, and presenting solutions to
                            clients.
                          </p>
                          <p className="common-para circle">
                            Conducting market research: Staying updated on
                            industry trends, competitor activities, and market
                            conditions to identify potential areas for growth
                            and development. Negotiating and closing deals:
                            Leading negotiations, preparing contracts, and
                            closing deals with clients to achieve revenue
                            targets and business objectives.
                          </p>
                          <p className="common-para circle">
                            Collaborating with internal teams: Working closely
                            with various departments, such as marketing, product
                            development, and customer support, to ensure smooth
                            project delivery, customer satisfaction, and ongoing
                            business success.
                          </p>
                          <p className="fw-bold text-white common-para mb-0 pb-0 mt-4">
                            Qualifications and Skills:
                          </p>
                          <p className="common-para">
                            To excel in this role, you should possess the
                            following qualifications and skills:
                          </p>
                          <p className="common-para circle">
                            Proven track record in business development or
                            sales, preferably in the [industry/sector] field.
                          </p>
                          <p className="common-para circle">
                            Strong communication and interpersonal skills, with
                            the ability to build rapport with clients and
                            colleagues at all levels.
                          </p>
                          <p className="common-para circle">
                            Negotiation and persuasive abilities, with a focus
                            on achieving win-win outcomes.
                          </p>
                          <p className="common-para circle">
                            Analytical mindset and market research skills to
                            identify new business opportunities and stay ahead
                            of the competition.
                          </p>
                          <p className="common-para circle">
                            Results-driven and target-oriented, with the ability
                            to work under pressure and meet deadlines.
                          </p>
                          <p className="common-para circle">
                            Self-motivated and proactive, with the ability to
                            work independently as well as part of a team.
                          </p>
                          <p className="common-para circle">
                            Bachelor's degree in business administration,
                            marketing, or a related field.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        className="modal fade application-form"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog modal-dialog-centered">
          <div className="modal-content carrer-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Application Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >

                <FaTimes/>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="">
                  <form onSubmit={handleSubmit(handleCarrerForm)}>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="mb-3 ">
                          <label htmlFor="name" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("fullName", {
                              required: true,
                            })}
                          />
                          {errors?.fullName?.type === "required" && (
                            <p className="text-danger">
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            E-mail
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            name="email"
                            {...register("email", {
                              required: true,
                              pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.com+$/,
                            })}
                          />
                          {errors?.email?.type === "required" && (
                            <p className="text-danger">
                              This field is required
                            </p>
                          )}
                          {errors?.email?.type === "pattern" && (
                            <p className="text-danger">
                              Please enter Valid email Address
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="mb-3">
                          <Controller
                            name="qualification"
                            control={control}
                            defaultValue=""
                            {...register("qualification", { required: true })}
                            render={({ field }) => (
                              <div>
                                <label
                                  htmlFor="qualification"
                                  className="form-label"
                                >
                                  Highest Qualification:
                                </label>
                                <select {...field} className="form-control">
                                  <option value="" className="form-control">
                                    Select an option
                                  </option>
                                  <option
                                    value="Post-Graduate"
                                    className="form-control"
                                  >
                                    Post-Graduate
                                  </option>
                                  <option
                                    value="Graduate"
                                    className="form-control"
                                  >
                                    Graduate
                                  </option>
                                  <option
                                    value="Non-Graduate"
                                    className="form-control"
                                  >
                                    Non-Graduate
                                  </option>
                                </select>
                                {errors.qualification && (
                                  <p className="text-danger">
                                    This field is required
                                  </p>
                                )}
                              </div>
                            )}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="mb-3">
                          <label htmlFor="experience" className="form-label">
                            Years of Experience
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("experience", {
                              required: true,
                            })}
                          />
                          {errors?.experience?.type === "required" && (
                            <p className="text-danger">
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="mb-3">
                          <label htmlFor="lastCompany" className="form-label">
                            Previous Company
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            {...register("lastCompany", {
                              required: true,
                            })}
                          />
                          {errors?.lastCompany?.type === "required" && (
                            <p className="text-danger">
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="mb-3">
                          <Controller
                            name="file"
                            control={control}
                            defaultValue=""
                            {...register("file", {
                              required: true,
                            })}
                            render={({ field }) => (
                              <div>
                                <label htmlFor="file" className="form-label">
                                  Select a file:
                                </label>
                                <input
                                  className="form-control"
                                  type="file"
                                  onChange={(e) =>
                                    field.onChange(e.target.files[0])
                                  }
                                  ref={field.ref}
                                />
                                {errors.file && <p>{errors.file.message}</p>}
                              </div>
                            )}
                          />
                          {errors.file && (
                            <p className="text-danger">
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-12 mt-3">
                        <ReCAPTCHA
                          sitekey="6LfpuTsnAAAAAJqzhPZ_v6KrUyb8ekPCgVNdjT6T"
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-12 pt-lg-3">
                        <button
                          className="common-btn mt-2 d-inline-block bg-transparent"
                          disabled={!verified}
                        >
                          Submit
                        </button>
                      </div>

                      <p className="">{msg}</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;