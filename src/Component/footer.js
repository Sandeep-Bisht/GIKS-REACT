import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="grid-container">
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Products</p>
            <ul>
              <li><a href="#" className="footer-link">Digital Experience Platform</a></li>
              <li><a href="#" className="footer-link">integrated Estate Managment System</a></li>
              <li><a href="#" className="footer-link">Intelligent Ticketing Managment</a></li>
              <li><a href="#" className="footer-link">Virtual Event Managment</a></li>
            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Technologies</p>
            <ul>
              <li><a href="#" className="footer-link">MERN</a></li>
              <li><a href="#" className="footer-link">Java</a></li>
              <li><a href="#" className="footer-link">PHP</a></li>

            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Platforms</p>
            <ul>
              <li><a href="#" className="footer-link">Liferay</a></li>
              <li><a href="#" className="footer-link">Laravel</a></li>
              <li><a href="#" className="footer-link">React Native</a></li>
              <li><a href="#" className="footer-link">Android</a></li>
              <li><a href="#" className="footer-link">IOS</a></li>
              <li><a href="#" className="footer-link">Wordpress</a></li>
              <li><a href="#" className="footer-link">salesforce</a></li>

            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Industries</p>
            <ul>
              <li><a href="#" className="footer-link">EPC</a></li>
              <li><a href="#" className="footer-link">Manufacturing (Pharmaceutical)</a></li>
              <li><a href="#" className="footer-link">Human Resource</a></li>
              <li><a href="#" className="footer-link">Government</a></li>
              <li><a href="#" className="footer-link">Fitness</a></li>

            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Services</p>
            <ul>
              <li><a href="#" className="footer-link">Infrastructure Managmenet</a></li>
              <li><a href="#" className="footer-link">Application Development</a></li>
              <li><a href="#" className="footer-link">Internet of Things</a></li>
              <li><a href="#" className="footer-link">IT Security Managment</a></li>


            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Applications</p>
            <ul>
              <li><a href="#" className="footer-link">Quarter Managment System</a></li>
              <li><a href="#" className="footer-link">Complaint Managment System</a></li>
              <li><a href="#" className="footer-link">Purchase Orders Managment System</a></li>
              <li><a href="#" className="footer-link">Fitness Application</a></li>


            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Company</p>
            <ul>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>



            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Connect With us</p>
            <ul>
              <li><a href="#" className="footer-link">India</a></li>
              <li><a href="#" className="footer-link">Canada</a></li>



            </ul>
          </div>
        </div>
        <div className="d-flex align-items-end  justify-content-end">
           {/* <img src="/images/footer-icon1.png" alt="icon 1" width="100" height="31"/>  */}

        </div>
        <div className="d-flex align-items-end justify-content-start">
          <img src="/images/footer-icon1.png" alt="icon 1" width="100" height="31" className="me-2" />
          <img src="/images/footer-icon2.png" alt="icon 2" width="100" height="31" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright-box">
            <div className="one">
              <img src="/images/footer-logo.png" className="w-75" />
            </div>
            <div className="two">
              <ul className="mb-0">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms & Conditions</a></li>

                <li><a href="#" className="footer-link"><img src="/images/iso.png" className="img-fluid" /></a></li>
              </ul>
            </div>
            <div className="three">
              <ul>
                <li><a href="#">
                    <img src="/images/instagram.svg" />
                  </a></li>
                <li><a href="#">
                    <img src="/images/twitter.svg" />
                  </a></li>
                <li><a href="#">
                    <img src="/images/facebook.svg" />
                  </a></li>
                <li><a href="#">
                    <img src="/images/linkedin.svg" />
                  </a></li>
                <li><a href="#">
                    <img src="/images/youtube.svg" />
                  </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer