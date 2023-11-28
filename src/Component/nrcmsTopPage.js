import React from 'react'

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
    </>
  )
}

export default NrcmsTopPage