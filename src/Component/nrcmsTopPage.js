import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function NrcmsTopPage() {
  return (
    <>
      <section className='nrcms-top-section'>
        <div className='container'>
          <div className='row text-white'>
            <div className='col-lg-6 nrcms-after-top'>
              <div>
                <p className='nrcms-para nrcms-head-para'>NRCMS is developed to provide just in time complaints resolution, maintenance and support to the stakeholders.</p>
              </div>
              <div className='d-flex '>
                <p className='nrcms-northern'>Northern Railway</p>
                <p className='nrcms-automated nrcms-height ms-2'>Automated</p>
              </div>
              <div>
                <p className='nrcms-automated'>Complaint Management System</p>
              </div>
              <div className=' d-flex nrcms-login-signup-button' style={{ width: "607px" }}>
                <div className='nrcms-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M20.3125 23.4375H10.9375C10.5231 23.4375 10.1257 23.2729 9.83265 22.9799C9.53962 22.6868 9.375 22.2894 9.375 21.875V19.5312H10.9375V21.875H20.3125V3.125H10.9375V5.46875H9.375V3.125C9.375 2.7106 9.53962 2.31317 9.83265 2.02015C10.1257 1.72712 10.5231 1.5625 10.9375 1.5625H20.3125C20.7269 1.5625 21.1243 1.72712 21.4174 2.02015C21.7104 2.31317 21.875 2.7106 21.875 3.125V21.875C21.875 22.2894 21.7104 22.6868 21.4174 22.9799C21.1243 23.2729 20.7269 23.4375 20.3125 23.4375Z" fill="white" />
                    <path d="M11.3984 16.0859L14.1953 13.2812H3.125V11.7188H14.1953L11.3984 8.91406L12.5 7.8125L17.1875 12.5L12.5 17.1875L11.3984 16.0859Z" fill="white" />
                  </svg>
                  <button className='nrcms-login-button btn text-white'>
                    Login
                  </button>
                </div>
                <div className='nrcms-signup-button ms-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M16.7968 5.46875C16.7968 5.36515 16.838 5.26579 16.9112 5.19254C16.9845 5.11928 17.0839 5.07813 17.1875 5.07813H19.1406V3.125C19.1406 3.0214 19.1817 2.92204 19.255 2.84879C19.3282 2.77553 19.4276 2.73438 19.5312 2.73438C19.6348 2.73438 19.7342 2.77553 19.8074 2.84879C19.8807 2.92204 19.9218 3.0214 19.9218 3.125V5.07813H21.875C21.9786 5.07813 22.0779 5.11928 22.1512 5.19254C22.2244 5.26579 22.2656 5.36515 22.2656 5.46875C22.2656 5.57235 22.2244 5.67171 22.1512 5.74496C22.0779 5.81822 21.9786 5.85938 21.875 5.85938H19.9218V7.8125C19.9218 7.9161 19.8807 8.01546 19.8074 8.08872C19.7342 8.16197 19.6348 8.20313 19.5312 8.20313C19.4276 8.20313 19.3282 8.16197 19.255 8.08872C19.1817 8.01546 19.1406 7.9161 19.1406 7.8125V5.85938H17.1875C17.0839 5.85938 16.9845 5.81822 16.9112 5.74496C16.838 5.67171 16.7968 5.57235 16.7968 5.46875ZM22.1484 10.957C22.2266 11.4676 22.2658 11.9834 22.2656 12.5C22.2671 13.8593 21.9837 15.2038 21.4337 16.4468C20.8837 17.6898 20.0792 18.8038 19.0722 19.7168L18.9941 19.7949C17.2073 21.3866 14.8978 22.2661 12.5048 22.2661C10.1119 22.2661 7.80239 21.3866 6.01558 19.7949C5.9821 19.774 5.95239 19.7476 5.92769 19.7168C4.47237 18.3901 3.45217 16.6543 3.00098 14.7374C2.54979 12.8205 2.68869 10.812 3.39944 8.9754C4.1102 7.13883 5.35961 5.56006 6.9837 4.44628C8.60778 3.33251 10.5307 2.73576 12.5 2.73438C13.0165 2.73418 13.5323 2.77336 14.0429 2.85156C14.0936 2.85986 14.1421 2.87807 14.1858 2.90514C14.2294 2.93222 14.2673 2.96763 14.2972 3.00936C14.3271 3.05108 14.3485 3.09829 14.3602 3.1483C14.3719 3.19831 14.3736 3.25012 14.3652 3.30078C14.3569 3.35146 14.3387 3.4 14.3116 3.44363C14.2845 3.48726 14.2491 3.52512 14.2074 3.55505C14.1657 3.58499 14.1185 3.6064 14.0685 3.61806C14.0184 3.62973 13.9666 3.63142 13.916 3.62305C13.4472 3.55292 12.9739 3.51702 12.5 3.51563C10.7249 3.51577 8.98963 4.04172 7.51318 5.02712C6.03674 6.01251 4.88528 7.41318 4.20411 9.05236C3.52295 10.6915 3.34261 12.4958 3.68586 14.2373C4.02911 15.9789 4.88057 17.5798 6.13277 18.8379C7.10252 17.2133 8.65755 16.0217 10.4785 15.5078C9.63282 15.057 8.96216 14.3364 8.5731 13.4606C8.18405 12.5848 8.09894 11.604 8.33129 10.6743C8.56365 9.74459 9.10014 8.91922 9.85548 8.32943C10.6108 7.73963 11.5416 7.41927 12.5 7.41927C13.4583 7.41927 14.3891 7.73963 15.1444 8.32943C15.8998 8.91922 16.4363 9.74459 16.6686 10.6743C16.901 11.604 16.8159 12.5848 16.4268 13.4606C16.0378 14.3364 15.3671 15.057 14.5214 15.5078C16.3424 16.0217 17.8974 17.2133 18.8671 18.8379C20.5422 17.1537 21.4831 14.8753 21.4843 12.5C21.4833 12.026 21.4474 11.5527 21.3769 11.084C21.3685 11.0333 21.3702 10.9815 21.3819 10.9315C21.3936 10.8815 21.415 10.8343 21.4449 10.7926C21.4748 10.7508 21.5127 10.7154 21.5563 10.6883C21.6 10.6613 21.6485 10.6431 21.6992 10.6348C21.7498 10.6264 21.8017 10.6281 21.8517 10.6398C21.9017 10.6514 21.9489 10.6728 21.9906 10.7028C22.0323 10.7327 22.0677 10.7706 22.0948 10.8142C22.1219 10.8578 22.1401 10.9064 22.1484 10.957ZM12.5 15.2344C13.1953 15.2344 13.875 15.0282 14.4531 14.6419C15.0313 14.2556 15.4819 13.7065 15.748 13.0641C16.0141 12.4217 16.0837 11.7149 15.948 11.0329C15.8124 10.3509 15.4775 9.7245 14.9859 9.23283C14.4942 8.74116 13.8678 8.40633 13.1858 8.27068C12.5039 8.13503 11.797 8.20465 11.1546 8.47074C10.5122 8.73683 9.96312 9.18743 9.57682 9.76557C9.19052 10.3437 8.98433 11.0234 8.98433 11.7188C8.98433 12.6512 9.35472 13.5454 10.014 14.2047C10.6733 14.864 11.5676 15.2344 12.5 15.2344ZM12.5 21.4844C14.613 21.4874 16.6583 20.7398 18.2714 19.375C17.6914 18.3558 16.8519 17.5084 15.8381 16.9189C14.8244 16.3294 13.6726 16.0189 12.5 16.0189C11.3273 16.0189 10.1755 16.3294 9.16178 16.9189C8.14804 17.5084 7.30848 18.3558 6.72847 19.375C8.34157 20.7398 10.387 21.4874 12.5 21.4844Z" fill="white" />
                  </svg>
                  <button className='nrcms-login-button btn text-white'>
                    Signup
                  </button>
                </div>
                <div className='ms-3'>
                  <img src="/images/qrImage.png" alt='' style={{ height: "60px" }} />
                </div>
                <div className='ms-3 nrcms-align-text'>
                  <div>
                    <p className='nrcms-scan-text'>Scan to download the</p>
                  </div>
                  <div className='d-flex'>
                    <p className='nrcms-scan-text'>App for</p>
                    <p className='nrcms-scan-text'>IOS</p>
                    <p className='nrcms-scan-text'>&</p>
                    <p className='nrcms-scan-text'>Android</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 nrcms-after-top text-center'>
              <img src='/images/nrcmsMobile.png' alt='' />
            </div>
          </div>
        </div>
      </section>
      <section className="counter-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="counter-area-wrapper">
                <div class="single-counter">
                  <span class="count-no f2">10000+</span>
                  <span class="count-name f2">Total Quarters</span>
                </div>
                <div class="single-counter">
                  <span class="count-no f2">18K+</span>
                  <span class="count-name f2">Resolved Complains</span>
                </div>
                <div class="single-counter">
                  <span class="count-no f2">5K+</span>
                  <span class="count-name f2">Daily Visitors</span>
                </div>
                <div class="single-counter">
                  <span class="count-no f2">0.02%</span>
                  <span class="count-name f2">Pending Complaints</span>
                </div>
                <div class="single-counter border-0">
                  <span class="count-no f2">1</span>
                  <span class="count-name f2">Admin</span>
                </div>

              </div>
            </div>
          </div>
          <div class="row mt-lg-5 pt-lg-4">
            <div class="col-lg-4">
              <div class="choose-us-card">
                <div class="choose-us-card-pic">
                  <img src="images/1.svg" class="img-fluid" />
                </div>
                <div class="choose-us-card-content">
                  <h2 class="choose-us-heading f2">Easy to implement
                    use, and scale</h2>
                  <p class="common-para">
                    The developed system is easy to use via multiple platforms and utilities. The developed system will provide just in time reporting and adhoc reporting to the management to support in decision making.
                  </p>
                  <a href="#" class="choose-us-link">Get Details</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="choose-us-card">
                <div class="choose-us-card-pic">
                  <img src="images/2.svg" class="img-fluid" />
                </div>
                <div class="choose-us-card-content">
                  <h2 class="choose-us-heading f2">
                    Scalable to All</h2>
                  <p class="common-para">
                    The developed system is easy to use via multiple platforms and utilities. The developed system will provide just in time reporting and adhoc reporting to the management to support in decision making.
                  </p>
                  <a href="#" class="choose-us-link">Get Details</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="choose-us-card">
                <div class="choose-us-card-pic">
                  <img src="images/3.svg" class="img-fluid" />
                </div>
                <div class="choose-us-card-content">
                  <h2 class="choose-us-heading f2">Work smarter, not harder</h2>
                  <p class="common-para">
                    The developed system is easy to use via multiple platforms and utilities. The developed system will provide just in time reporting and adhoc reporting to the management to support in decision making.
                  </p>
                  <a href="#" class="choose-us-link">Get Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nrcms-mid-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-11 nrcms-img-railway-wrapper">
              <span className='nrcms-video-section'>video section</span>
              <div className='nrcms-img-railway'>
                <img className='nrcms-img-railway img-fluid' src="images/Northern Railway - Complaint Management System - nrcms.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='nrcms-all-in-app-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <hr className='nrcms-lines' />
            </div>
            <div className='col-4  text-center'>
              <span className='nrcms-video-section'>All in one App</span>
            </div>
            <div className='col-4'>
              <hr className='nrcms-lines' />
            </div>
          </div>
        </div>
        <div className='contaner-fluid nrcms-all-in-app-container'>
          <div className='row left-part'>
            <div className='col-lg-4'>
              <div className='row left-part'>
                <div className='col-lg-12 mobile-app-image-wrapper'>
                  <div className=''>
                    <img src="/images/Multiplechannelmockup.png" className='mobile-app-image img-fluid' alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8 mobile-app-text-part'>
              <div className='mobile-app-text-insideDiv text-center'>
                <div className='inside-text-app'>
                  <div className='d-flex justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 20 24" fill="none">
                      <path d="M19.0607 13.0607C19.6464 12.4749 19.6464 11.5251 19.0607 10.9393L9.51472 1.3934C8.92893 0.807611 7.97918 0.807611 7.3934 1.3934C6.80761 1.97919 6.80761 2.92893 7.3934 3.51472L15.8787 12L7.3934 20.4853C6.80761 21.0711 6.80761 22.0208 7.3934 22.6066C7.97918 23.1924 8.92893 23.1924 9.51472 22.6066L19.0607 13.0607ZM0 13.5H18V10.5H0V13.5Z" fill="#1B2A41" />
                    </svg>
                    <p className='ms-3 mobile-app-para'>Web Application</p>
                  </div>
                  <div className='d-flex justify-content-center mt-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 20 24" fill="none">
                      <path d="M19.0607 13.0607C19.6464 12.4749 19.6464 11.5251 19.0607 10.9393L9.51472 1.3934C8.92893 0.807611 7.97918 0.807611 7.3934 1.3934C6.80761 1.97919 6.80761 2.92893 7.3934 3.51472L15.8787 12L7.3934 20.4853C6.80761 21.0711 6.80761 22.0208 7.3934 22.6066C7.97918 23.1924 8.92893 23.1924 9.51472 22.6066L19.0607 13.0607ZM0 13.5H18V10.5H0V13.5Z" fill="#1B2A41" />
                    </svg>
                    <p className='ms-3 mobile-app-para'>Mobile App</p>
                  </div>
                  <div className='d-flex justify-content-center mt-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 20 24" fill="none">
                      <path d="M19.0607 13.0607C19.6464 12.4749 19.6464 11.5251 19.0607 10.9393L9.51472 1.3934C8.92893 0.807611 7.97918 0.807611 7.3934 1.3934C6.80761 1.97919 6.80761 2.92893 7.3934 3.51472L15.8787 12L7.3934 20.4853C6.80761 21.0711 6.80761 22.0208 7.3934 22.6066C7.97918 23.1924 8.92893 23.1924 9.51472 22.6066L19.0607 13.0607ZM0 13.5H18V10.5H0V13.5Z" fill="#1B2A41" />
                    </svg>
                    <p className='ms-3 mobile-app-para'>
                      Telephone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="counter-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="counter-area-wrapper">
                <div class="single-counter">
                  <span class="count-no f2">10000+</span>
                  <span class="count-name f2">Total Quarters</span>
                </div>
                <div class="single-counter">
                  <span class="count-no f2">18K+</span>
                  <span class="count-name f2">Resolved Complains</span>
                </div>
                <div class="single-counter">
                  <span class="count-no f2">5K+</span>
                  <span class="count-name f2">Daily Visitors</span>
                </div>
                <div class="single-counter">
                  <span class="count-no f2">0.02%</span>
                  <span class="count-name f2">Pending Complaints</span>
                </div>
                <div class="single-counter border-0">
                  <span class="count-no f2">1</span>
                  <span class="count-name f2">Admin</span>
                </div>

              </div>
            </div>
          </div>
          <div class="row mt-lg-5 pt-lg-4">
            <div class="col-lg-4">
              <div class="choose-us-card">
                <div class="choose-us-card-pic">
                  <img src="images/1.svg" class="img-fluid" />
                </div>
                <div class="choose-us-card-content">
                  <h2 class="choose-us-heading f2">Easy to implement
                    use, and scale</h2>
                  <p class="common-para">
                    The developed system is easy to use via multiple platforms and utilities. The developed system will provide just in time reporting and adhoc reporting to the management to support in decision making.
                  </p>
                  <a href="#" class="choose-us-link">Get Details</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="choose-us-card">
                <div class="choose-us-card-pic">
                  <img src="images/2.svg" class="img-fluid" />
                </div>
                <div class="choose-us-card-content">
                  <h2 class="choose-us-heading f2">
                    Scalable to All</h2>
                  <p class="common-para">
                    The developed system is easy to use via multiple platforms and utilities. The developed system will provide just in time reporting and adhoc reporting to the management to support in decision making.
                  </p>
                  <a href="#" class="choose-us-link">Get Details</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="choose-us-card">
                <div class="choose-us-card-pic">
                  <img src="images/3.svg" class="img-fluid" />
                </div>
                <div class="choose-us-card-content">
                  <h2 class="choose-us-heading f2">Work smarter, not harder</h2>
                  <p class="common-para">
                    The developed system is easy to use via multiple platforms and utilities. The developed system will provide just in time reporting and adhoc reporting to the management to support in decision making.
                  </p>
                  <a href="#" class="choose-us-link">Get Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="how-to-use">
        <div class="container">
          <div class="row user-managment-row">
            <div class="col-lg-12">
              <div className='row'>
                <div className='col-lg-3 text-white nrcms-userfunctionality'>
                  <hr />
                </div>

                <div class=" col-lg-6 heading-wrapper">
                  <span>
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.0352 29.8281C33.2984 28.0827 32.229 26.4973 30.8868 25.1602C29.5487 23.8192 27.9635 22.75 26.2188 22.0117C26.2032 22.0039 26.1876 22 26.172 21.9922C28.6056 20.2344 30.1876 17.3711 30.1876 14.1406C30.1876 8.78906 25.8517 4.45312 20.5001 4.45312C15.1485 4.45312 10.8126 8.78906 10.8126 14.1406C10.8126 17.3711 12.3946 20.2344 14.8282 21.9961C14.8126 22.0039 14.797 22.0078 14.7813 22.0156C13.0313 22.7539 11.461 23.8125 10.1134 25.1641C8.7724 26.5022 7.70324 28.0874 6.96494 29.832C6.23964 31.5401 5.84846 33.3713 5.8126 35.2266C5.81156 35.2683 5.81887 35.3097 5.8341 35.3486C5.84934 35.3874 5.8722 35.4228 5.90132 35.4526C5.93044 35.4825 5.96524 35.5062 6.00368 35.5224C6.04211 35.5386 6.08339 35.5469 6.1251 35.5469H8.46885C8.64072 35.5469 8.77744 35.4102 8.78135 35.2422C8.85947 32.2266 10.0704 29.4023 12.211 27.2617C14.4259 25.0469 17.3673 23.8281 20.5001 23.8281C23.6329 23.8281 26.5743 25.0469 28.7892 27.2617C30.9298 29.4023 32.1407 32.2266 32.2188 35.2422C32.2227 35.4141 32.3595 35.5469 32.5313 35.5469H34.8751C34.9168 35.5469 34.9581 35.5386 34.9965 35.5224C35.0349 35.5062 35.0697 35.4825 35.0989 35.4526C35.128 35.4228 35.1508 35.3874 35.1661 35.3486C35.1813 35.3097 35.1886 35.2683 35.1876 35.2266C35.1485 33.3594 34.7618 31.543 34.0352 29.8281ZM20.5001 20.8594C18.7071 20.8594 17.0196 20.1602 15.7501 18.8906C14.4806 17.6211 13.7813 15.9336 13.7813 14.1406C13.7813 12.3477 14.4806 10.6602 15.7501 9.39062C17.0196 8.12109 18.7071 7.42188 20.5001 7.42188C22.2931 7.42188 23.9806 8.12109 25.2501 9.39062C26.5196 10.6602 27.2188 12.3477 27.2188 14.1406C27.2188 15.9336 26.5196 17.6211 25.2501 18.8906C23.9806 20.1602 22.2931 20.8594 20.5001 20.8594Z" fill="white" />
                    </svg>
                  </span>
                  <h2 class="nrcms-common-heading text-white mb-0 ms-3">
                    User Functionalities
                  </h2>


                </div>
                <div className='col-lg-3 text-white nrcms-userfunctionality'>
                  <hr />
                </div>
              </div>

            </div>
          </div>
          <div class="row mt-lg-4">
            <div class="col-lg-12">
              <div class="functionalities-wrapper">
                <div class="functionality-box">

                  <img src="images/1.png" class="img-fluid" />
                  <p class="functionality-box-heading common-para">
                    User Managment
                  </p>

                </div>
                <div class="functionality-box">
                  <img src="images/2.png" class="img-fluid" />
                  <p class="functionality-box-heading common-para">
                    Complaints Management
                  </p>

                </div>
                <div class="functionality-box">
                  <img src="images/3.png" class="img-fluid" />
                  <p class="functionality-box-heading common-para">
                    Tracking
                  </p>

                </div>
                <div class="functionality-box">
                  <img src="images/4.png" class="img-fluid" />
                  <p class="functionality-box-heading common-para">
                    Feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-lg-4">
            <div class="col-lg-12">
              <div className='row user-managment-row'>
                <div className='col-lg-3 text-white nrcms-userfunctionality'>
                  <hr />
                </div>

                <div class=" col-lg-6 heading-wrapper">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <g clip-path="url(#clip0_809_270)">
                        <path d="M16.3109 16.4556C14.8249 16.4556 13.3722 16.0148 12.1368 15.1889C10.9014 14.3631 9.93866 13.1894 9.37049 11.8163C8.80232 10.4431 8.65423 8.93234 8.94495 7.47503C9.23567 6.01771 9.95214 4.67938 11.0037 3.62938C12.0553 2.57937 13.3946 1.86489 14.8524 1.57632C16.3101 1.28776 17.8207 1.43809 19.193 2.0083C20.5653 2.5785 21.7376 3.54295 22.5616 4.7796C23.3856 6.01626 23.8242 7.46955 23.822 8.95558C23.8161 10.9448 23.0226 12.8507 21.6149 14.2563C20.2073 15.6619 18.3002 16.4526 16.3109 16.4556ZM16.3109 3.66669C15.2649 3.66669 14.2423 3.97687 13.3726 4.55803C12.5028 5.13918 11.8249 5.96519 11.4246 6.9316C11.0243 7.89802 10.9196 8.96144 11.1236 9.98739C11.3277 11.0133 11.8314 11.9557 12.5711 12.6954C13.3108 13.435 14.2532 13.9388 15.2791 14.1428C16.305 14.3469 17.3685 14.2422 18.3349 13.8419C19.3013 13.4416 20.1273 12.7637 20.7085 11.8939C21.2896 11.0242 21.5998 10.0016 21.5998 8.95558C21.5998 7.55288 21.0426 6.20763 20.0507 5.21577C19.0589 4.22391 17.7136 3.66669 16.3109 3.66669Z" fill="white" />
                        <path d="M18.2444 35.2C18.0016 34.9571 17.8142 34.6645 17.6953 34.3422C17.5764 34.02 17.5287 33.6758 17.5555 33.3334H4.44439V26.9111C6.01984 25.2301 7.93073 23.8986 10.0534 23.0028C12.176 22.107 14.4631 21.667 16.7666 21.7111H17.5666C17.5156 21.3386 17.5512 20.9593 17.6707 20.6028C17.7902 20.2463 17.9903 19.9222 18.2555 19.6556L18.3888 19.5334C17.8666 19.5334 17.2777 19.4667 16.7666 19.4667C14.056 19.4024 11.3649 19.9412 8.88792 21.0441C6.41098 22.1471 4.21009 23.7868 2.44439 25.8445C2.30014 26.0368 2.22217 26.2707 2.22217 26.5111V33.3334C2.22217 33.9227 2.45629 34.488 2.87304 34.9047C3.28979 35.3215 3.85502 35.5556 4.44439 35.5556H18.5555L18.2444 35.2Z" fill="white" />
                        <path d="M29.8555 18.1C29.9104 18.0886 29.9672 18.0886 30.0221 18.1C29.967 18.09 29.9106 18.09 29.8555 18.1Z" fill="white" />
                        <path d="M37.4221 25.9111L35.1999 25.2333C35.0411 24.6897 34.825 24.1646 34.5555 23.6666L35.6666 21.5999C35.7027 21.5173 35.7114 21.4252 35.6914 21.3372C35.6714 21.2492 35.6238 21.17 35.5555 21.1111L33.9443 19.4999C33.8834 19.434 33.8021 19.3904 33.7134 19.3763C33.6247 19.3622 33.5339 19.3784 33.4555 19.4222L31.411 20.5333C30.9076 20.2503 30.3748 20.023 29.8221 19.8555L29.1444 17.6333C29.1156 17.5515 29.061 17.4812 28.9889 17.4331C28.9167 17.3851 28.8309 17.3617 28.7444 17.3666H26.4666C26.3791 17.3656 26.2937 17.3933 26.2234 17.4455C26.1532 17.4977 26.102 17.5714 26.0777 17.6555L25.3999 19.8777C24.8434 20.0396 24.3067 20.2632 23.7999 20.5444L21.7777 19.4333C21.701 19.3903 21.612 19.3746 21.5252 19.3888C21.4385 19.4029 21.359 19.446 21.2999 19.5111L19.6555 21.1111C19.5945 21.1753 19.5552 21.257 19.5433 21.3447C19.5313 21.4325 19.5472 21.5218 19.5888 21.5999L20.6999 23.6222C20.406 24.123 20.1711 24.6562 19.9999 25.2111L17.7777 25.8777C17.6936 25.902 17.6199 25.9532 17.5677 26.0235C17.5155 26.0937 17.4878 26.1791 17.4888 26.2666V28.5444C17.4954 28.6246 17.5267 28.7009 17.5784 28.7626C17.6302 28.8243 17.6998 28.8684 17.7777 28.8888L19.9999 29.5666C20.1641 30.1117 20.3877 30.637 20.6666 31.1333L19.5555 33.2555C19.5131 33.3315 19.4966 33.4193 19.5087 33.5056C19.5207 33.5918 19.5605 33.6717 19.6221 33.7333L21.2332 35.3444C21.2962 35.4072 21.3773 35.4485 21.4651 35.4624C21.5529 35.4764 21.6428 35.4623 21.7221 35.4222L23.7999 34.3111C24.2944 34.577 24.8159 34.7893 25.3555 34.9444L26.0221 37.1666C26.0495 37.2489 26.1014 37.3207 26.171 37.3724C26.2406 37.4241 26.3244 37.4531 26.411 37.4555H28.6888C28.7759 37.4547 28.8604 37.4263 28.9303 37.3744C29.0002 37.3225 29.0518 37.2497 29.0777 37.1666L29.7555 34.8888C30.2879 34.7336 30.802 34.5213 31.2888 34.2555L33.3888 35.3666C33.466 35.4076 33.5545 35.4222 33.6408 35.4082C33.7271 35.3942 33.8064 35.3522 33.8666 35.2888L35.5555 33.7777C35.6009 33.7125 35.6252 33.635 35.6252 33.5555C35.6252 33.476 35.6009 33.3985 35.5555 33.3333L34.4444 31.2444C34.7141 30.7543 34.9302 30.2364 35.0888 29.6999L37.311 29.0222C37.3951 28.9979 37.4689 28.9467 37.521 28.8764C37.5732 28.8062 37.6009 28.7208 37.5999 28.6333V26.2999C37.6101 26.2249 37.5988 26.1486 37.5673 26.0798C37.5359 26.0109 37.4855 25.9524 37.4221 25.9111ZM27.611 31.1111C26.8761 31.1133 26.1571 30.8972 25.5451 30.4903C24.9331 30.0833 24.4557 29.5038 24.1734 28.8253C23.8912 28.1467 23.8167 27.3996 23.9596 26.6787C24.1024 25.9578 24.4561 25.2955 24.9758 24.7758C25.4954 24.2561 26.1577 23.9025 26.8786 23.7596C27.5996 23.6168 28.3467 23.6912 29.0252 23.9735C29.7038 24.2557 30.2833 24.7331 30.6902 25.3451C31.0971 25.9571 31.3132 26.6761 31.311 27.4111C31.3081 28.3915 30.9173 29.3309 30.2241 30.0241C29.5308 30.7174 28.5914 31.1081 27.611 31.1111Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_809_270">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <h2 class="nrcms-common-heading text-white mb-0 ms-3">
                    Admin Functionalities
                  </h2>


                </div>
                <div className='col-lg-3 text-white nrcms-userfunctionality'>
                  <hr />
                </div>
              </div>

            </div>
            <div class="col-lg-12">
              <div class="functionalities-wrapper">
                <div class="functionality-box">
                  <img src="images/5.png" class="img-fluid" />
                  <p class="functionality-box-heading common-para">
                    Complaints Management
                  </p>
                </div>
                <div class="functionality-box">
                  <img src="images/6.png" class="img-fluid" />
                  <p class="functionality-box-heading common-para">
                    Vendor Management
                  </p>
                </div>
                <div class="functionality-box">
                  <img src="images/7.png" class="img-fluid" />
                  <p class="functionality-box-heading common-para">
                    Resources & Tracking
                  </p>
                </div>
                <div class="functionality-box">
                  <img src="images/8.png" class="img-fluid" />
                  <p class="functionality-box-heading common-para">
                    Reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='nrcms-testimonials'>
        <div className='container'>
          <div className='row nrcms-testimonials-row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-5'>
                  <hr className='nrcms-lines' />
                </div>
                <div className='col-lg-2  text-center'>
                  <span className='nrcms-video-section'>Testimonials</span>
                </div>
                <div className='col-lg-5'>
                  <hr className='nrcms-lines' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='crousel-card  text-center pt-3'>
                  <div>
                    <p className='double-quoted m-0'>“</p>
                  </div>
                  <p className='crousel-para common-para'>
                    Lorem ipsum dolor sit amet consectetur. At mi suscipit pellentesque pulvinar.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='crousel-card text-center pt-3'>
                  <div>
                    <p className='double-quoted m-0'>“</p>
                  </div>
                  <p className='crousel-para common-para'>
                    Lorem ipsum dolor sit amet consectetur. At mi suscipit pellentesque pulvinar.
                  </p>
                </div>
              </div>
              <div className='col-lg-4 '>
                <div className='crousel-card text-center pt-3'>
                  <div>
                    <p className='double-quoted m-0'>“</p>
                  </div>
                  <p className='crousel-para common-para'>
                    Lorem ipsum dolor sit amet consectetur. At mi suscipit pellentesque pulvinar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='view-button text-center'>
            <button className='btn text-white'>View All</button>
          </div>
        </div>
      </section>
      <section className="Nrcmsfooter">
        <div className="container">
            <div className='row customer-experience-row'>
            <div className='col-2 customer-experience-line'>
              <hr className='nrcms-lines' />
            </div>
            <div className='col-8  text-center'>
              <span className='nrcms-video-section'>We are dedicated for best customer experience</span>
            </div>
            <div className='col-2 customer-experience-line'>
              <hr className='nrcms-lines' />
            </div>
          </div>
            <div className="row">
              <div className="col-md-6 my-4">
                <img src="/images/mask group.jpg" className="img-fluid"></img>
              </div>
              <div className="col-md-6">
                <div className="nrcms-Rectangle d-flex my-4">
                  <div className="nrcms-straight">
                    <img src="images/Rectangle 75.png"></img>
                  </div>
                  <div>
                    <img src="images/Rectangle 73.png"></img>
                  </div>
                </div>

                <div className="nrcms-two">
                  <ul>
                    <li className="d-flex my-4">
                      <IoLocation className="nrcms-icon fs-2 " />
                      <p className="common-paranrcms-last text-dark">
                        Colony IOW office, Concerned Colony, Delhi Division, New
                        Delhi
                      </p>
                    </li>
                    <li className="d-flex my-4">
                      <MdEmail className="nrcms-icon fs-2" />
                      <p className="common-paranrcms-last text-dark">
                        mailto:info@nrcms.in
                      </p>
                    </li>
                    <li className="d-flex my-4">
                      <FaPhoneAlt className="nrcms-icon fs-2" />
                      <p className="common-paranrcms-last text-dark">
                        +91-7500872014
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="nrcms-Rectangle d-flex my-4">
                  <div className="nrcms-straight">
                    <img src="images/Rectangle 75.png"></img>
                  </div>
                  <div>
                    <img src="images/Rectangle 73.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section className="Nrcmsfootersecond">
        <div className="container">
          <div className="row section-gap">
            <div className="col-md-4 single-footer-widget">
              <h4 className="nrcms-footer-heading">About-us</h4>
              <div className="nrcms  d-flex ">
                <img
                  src="/images/Logo 1.png"
                  className="nrcms-footerlogo"
                ></img>
                <img
                  src="/images/image 2.png"
                  className="nrcms-footerlogo2"
                ></img>
              </div>
              <p className="common-paranrcms my-4">
                NRCMS is developed to provide just in time complaints
                resolution, maintenance and support to the stakeholders
              </p>
            </div>
            <div className="col-md-4 single-footer-widget">
              <h4 className="nrcms-footer-heading">Contact-us</h4>
              <div className="nrcms-one">
                <ul>
                  <li>
                    {" "}
                    <IoLocation className="nrcms-icon fs-2" />
                    <p>
                      Colony IOW office, Concerned Colony, Delhi Division, New
                      Delhi
                    </p>
                  </li>
                  <li>
                    {" "}
                    <FaPhoneAlt className="nrcms-icon" /> +91-7500872014
                  </li>
                  <li>
                    {" "}
                    <MdEmail className="nrcms-icon" /> mailto:info@nrcms.in
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 single-footer-widget">
              <div className="nrcms-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3503.2836248374633!2d77.253418!3d28.591267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cb704096a9%3A0xc4a25f8cae278c41!2sI.O.W%20Office%20(ESTATE)!5e0!3m2!1sen!2sin!4v1701233919861!5m2!1sen!2sin" width="350" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>
            </div>
          </div>
          <hr className="nrcms-line" />
        </div>
      </section>
      <section className="nrcms-last">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="nrcms-last-footer">
                <p className="nrcms-para d-flex justify-content-center">
                  <span>
                    Copyright © 2023 All right reserved |  {" "}
                    <a href="https://giksindia.com/">
                      {""} Designed & Developed by GIKS India PVT.Ltd
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NrcmsTopPage