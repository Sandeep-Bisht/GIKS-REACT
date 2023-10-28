import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [msg, setMsg] = useState(undefined);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState();
  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetContactForm,
  } = useForm({
    mode: "onBlur",
  });

  const handleContactUS = async (data) => {
    // let url = "http://localhost:4500/api/contact-us";
    let url = "http://185.239.209.106:4500/api/contact-us";
    setLoading(true);
    let response = await axios.post(url, data);
    try {
      if (response) {
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        resetContactForm();
        setMsg(response.data.message);
        setVerified(false);
        setLoading(false);
        setTimeout(function () {
          setMsg(undefined);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function onChange(value) {
    setVerified(true);
  }

  return (
    <>
      <section className="contact-single">
        <div className="container">
          <div className="row mob-col-reverse">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="contact-single-left">
                <h1 className="common-heading">Get in Touch With Us</h1>
                <p className="common-subheading mt-4">
                  Would you like more information or
                  <br /> to schedule an appointment?
                </p>

                <ul>
                  <li className="contact-link">
                    <div>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99984 0.833008C6.05492 0.833008 4.18965 1.60562 2.81439 2.98089C1.43912 4.35616 0.666504 6.22142 0.666504 8.16634C0.666504 13.1163 7.129 18.708 7.404 18.9463C7.57004 19.0884 7.78135 19.1664 7.99984 19.1664C8.21833 19.1664 8.42963 19.0884 8.59567 18.9463C8.9165 18.708 15.3332 13.1163 15.3332 8.16634C15.3332 6.22142 14.5606 4.35616 13.1853 2.98089C11.81 1.60562 9.94476 0.833008 7.99984 0.833008ZM7.99984 17.0122C6.04734 15.1788 2.49984 11.228 2.49984 8.16634C2.49984 6.70765 3.0793 5.3087 4.11075 4.27725C5.1422 3.2458 6.54115 2.66634 7.99984 2.66634C9.45853 2.66634 10.8575 3.2458 11.8889 4.27725C12.9204 5.3087 13.4998 6.70765 13.4998 8.16634C13.4998 11.228 9.95234 15.188 7.99984 17.0122ZM7.99984 4.49967C7.27464 4.49967 6.56573 4.71472 5.96275 5.11762C5.35977 5.52052 4.8898 6.09317 4.61228 6.76317C4.33476 7.43316 4.26215 8.17041 4.40362 8.88167C4.5451 9.59294 4.89432 10.2463 5.40711 10.7591C5.9199 11.2719 6.57324 11.6211 7.28451 11.7626C7.99577 11.904 8.73301 11.8314 9.40301 11.5539C10.073 11.2764 10.6457 10.8064 11.0486 10.2034C11.4515 9.60045 11.6665 8.89154 11.6665 8.16634C11.6665 7.19388 11.2802 6.26125 10.5926 5.57362C9.90493 4.88598 8.9723 4.49967 7.99984 4.49967ZM7.99984 9.99967C7.63724 9.99967 7.28278 9.89215 6.98129 9.6907C6.6798 9.48925 6.44482 9.20293 6.30606 8.86793C6.1673 8.53293 6.13099 8.16431 6.20173 7.80868C6.27247 7.45304 6.44708 7.12638 6.70348 6.86998C6.95987 6.61358 7.28654 6.43897 7.64217 6.36823C7.9978 6.2975 8.36643 6.3338 8.70142 6.47256C9.03642 6.61132 9.32275 6.84631 9.5242 7.1478C9.72565 7.44929 9.83317 7.80374 9.83317 8.16634C9.83317 8.65257 9.64002 9.11889 9.2962 9.4627C8.95238 9.80652 8.48607 9.99967 7.99984 9.99967Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      {" "}
                      <span className="contact-link-info common-para">
                        GIKS INDIA PVT LTD,2nd floor,Sujok
                        <br />
                        Building Mansarovar Colony, Ballupur
                        <br />
                        Chowk, Dehradun, Uttarakhand 248001
                      </span>
                    </div>
                  </li>
                  <li className="contact-link">
                    <a href="tel:+91-7500872014">
                      <div>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.7743 12.196L15.2618 10.6835C14.811 10.2362 14.2024 9.98407 13.5674 9.98137C12.9323 9.97866 12.3216 10.2256 11.867 10.669C11.6244 10.913 11.3043 11.0648 10.9619 11.0983C10.6195 11.1318 10.2761 11.0449 9.99077 10.8526C8.86478 10.1011 7.89747 9.13568 7.14383 8.01115C6.95488 7.72269 6.87113 7.37791 6.9067 7.03491C6.94226 6.69191 7.09497 6.37165 7.33908 6.12809C7.77846 5.67301 8.02225 5.06402 8.01826 4.43147C8.01428 3.79891 7.76284 3.19304 7.31777 2.74353L5.80527 1.23103C5.35245 0.779758 4.73922 0.526367 4.09993 0.526367C3.46063 0.526367 2.84741 0.779758 2.39458 1.23103L1.95939 1.6669C-0.309356 3.93565 -0.139544 8.70553 4.58083 13.4232C7.42708 16.2701 10.2919 17.4622 12.615 17.4622C13.2988 17.485 13.9803 17.3714 14.6198 17.1282C15.2593 16.8849 15.844 16.5168 16.3398 16.0453L16.7757 15.6094C17.2278 15.1564 17.4816 14.5424 17.4813 13.9024C17.4811 13.2624 17.2268 12.6486 16.7743 12.196ZM15.8022 14.6373L15.3663 15.0732C13.5788 16.8607 9.63327 16.5341 5.55158 12.4517C1.46989 8.36934 1.14264 4.42103 2.93014 2.63353L3.36258 2.19834C3.55729 2.00434 3.82094 1.89541 4.0958 1.89541C4.37066 1.89541 4.63431 2.00434 4.82902 2.19834L6.34152 3.71084C6.53269 3.90297 6.6412 4.1622 6.6439 4.43322C6.64659 4.70423 6.54326 4.96557 6.35596 5.16147C5.8914 5.62899 5.60161 6.24195 5.53515 6.89768C5.46869 7.5534 5.62959 8.21205 5.99089 8.76328C6.84721 10.0447 7.94837 11.1442 9.23108 11.9987C9.78066 12.36 10.4376 12.5219 11.0921 12.4572C11.7467 12.3925 12.3592 12.1052 12.8274 11.6432C13.0229 11.4537 13.285 11.3485 13.5573 11.3501C13.8296 11.3518 14.0903 11.4602 14.2835 11.6522L15.796 13.1647C15.8935 13.2607 15.971 13.3751 16.0241 13.5013C16.0772 13.6274 16.1049 13.7628 16.1054 13.8997C16.106 14.0365 16.0795 14.1722 16.0275 14.2988C15.9754 14.4253 15.8989 14.5404 15.8022 14.6373Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="contact-link-info common-para">
                          0135-3598127, +91-7500872014
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="contact-link">
                    <a href="mailto:info@giksindia.com">
                      <div>
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.1668 2.50033C19.1668 1.49199 18.3418 0.666992 17.3335 0.666992H2.66683C1.6585 0.666992 0.833496 1.49199 0.833496 2.50033V13.5003C0.833496 14.5087 1.6585 15.3337 2.66683 15.3337H17.3335C18.3418 15.3337 19.1668 14.5087 19.1668 13.5003V2.50033ZM17.3335 2.50033L10.0002 7.08366L2.66683 2.50033H17.3335ZM17.3335 13.5003H2.66683V4.33366L10.0002 8.91699L17.3335 4.33366V13.5003Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div>
                        {" "}
                        <span className="contact-link-info common-para">
                          info@giksindia.com
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                {/* <!-- <div className="fill-out-box">
                        <p className="fill-out-heading">FILL OUT THE FORM</p>
                        <p className="common-para">If so, please fill out the form and we’ll get back to you as soon as
                           possible.
                        </p>
                     </div> --> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="contact-single-right">
                <form onSubmit={handleSubmit(handleContactUS)}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="fill-out-box mt-0">
                        <p className="common-para">
                          We’ll get back to you as soon as possible
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="mb-3 input-wrapper">
                        <label htmlFor="name" className="form-label">
                          First Name
                        </label>
                        {/* <input type="text" className="form-control" id="firstname" name='firstName'/> */}
                        <input
                          type="text"
                          className="form-control"
                          //   onInput={() => setMessage("")}
                          {...register("firstName", {
                            required: true,
                            pattern: /^[A-Za-z\s]+$/,
                          })}
                        />

                        {errors.firstName ? (
                          errors.firstName.type === "required" ? (
                            <p className="text-danger">
                              This field is required
                            </p>
                          ) : (
                            <p className="text-danger">
                              Please enter a valid firstname
                            </p>
                          )
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="mb-3 input-wrapper">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("lastName", {
                            required: true,
                            pattern: /^[A-Za-z\s]+$/,
                          })}
                        />

                        {errors.lastName ? (
                          errors.lastName.type === "required" ? (
                            <p className="text-danger">
                              This field is required
                            </p>
                          ) : (
                            <p className="text-danger">
                              Please enter a valid lastname
                            </p>
                          )
                        ) : null}
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
                          <p className="text-danger">This field is required</p>
                        )}
                        {errors?.email?.type === "pattern" && (
                          <p className="text-danger">
                            Please enter Valid email Address
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="mb-3 input-wrapper">
                        <label htmlFor="number" className="form-label">
                          Phone number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("phoneNumber", {
                            required: true,
                            pattern: /^[0-9]{10}$/, // Enforce exactly 10 numeric digits
                            maxLength: 10, // Enforce exactly 10 characters
                            minLength: 10, // Enforce exactly 10 characters
                          })}
                        />
                        {errors.phoneNumber ? (
                          errors.phoneNumber.type === "required" ? (
                            <p className="text-danger">
                              This field is required
                            </p>
                          ) : (
                            <p className="text-danger">
                              Please enter a valid 10-digit phone number
                            </p>
                          )
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3 input-wrapper">
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("subject", {
                            required: true,
                          })}
                        />
                        {errors?.subject?.type === "required" && (
                          <p className="text-danger">This field is required</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4 input-wrapper">
                        <label className="form-label">Message</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("message")}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <ReCAPTCHA
                        sitekey="6LdvhdMoAAAAAAH-4p2HpVvZB7xdQkVOgHw-dQOw"
                        onChange={onChange}
                        ref={recaptchaRef}
                      />
                    </div>
                    <div className="col-md-12">
                      <button
                        className="common-btn mt-4 d-inline-block bg-transparent"
                        disabled={!verified}
                      >
                        Submit
                      </button>
                    </div>

                    {/* <p className="pt-5">{msg}</p> */}
                    {loading ? (
                      <div>
                        <div className="overlay"></div>
                        <div className="position-absolute top-50 start-50 translate-middle loader-parent">
                          <div className="loader-parent">
                            {" "}
                            <span class="loader">loading...</span>
                          </div>
                        </div>
                      </div>
                    ) : msg ? (
                      <p className="success-msg">Form submitted successfully</p>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="map-box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.5982855712145!2d78.0101075744537!3d30.33394230479847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a9d312d2add%3A0x2881f11554c636b7!2sGIKS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1683176379975!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
