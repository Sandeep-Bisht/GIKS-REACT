import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className="container expand-container">
      <div className="grid-container">
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Products</p>
            <ul>
              <li>
                <Link to='/digital-experience-platform' className="footer-link">Digital Experience Platform</Link>
              </li>
              <li>
                <Link to='/integrated-estate-management-system' className="footer-link">Integrated Estate Management System</Link>
              </li>
              <li>
              <Link to='/intelligent-ticketing-management' className="footer-link">Intelligent Ticketing Management</Link></li>

              <li><Link to='/virtual-event-management' className="footer-link">Virtual Event Management</Link></li>
            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Technologies</p>
            <ul>
              <li><Link to='/mern' className="footer-link">MERN</Link></li>
              <li><Link to='/java' className="footer-link">Java</Link></li>
              <li><Link to='/php' className="footer-link">PHP</Link></li>

            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Platforms</p>
            <ul>
              {/* <li><a href="#" className="footer-link">Liferay</a></li>
              <li><a href="#" className="footer-link">Laravel</a></li>
              <li><a href="#" className="footer-link">React Native</a></li>
              <li><a href="#" className="footer-link">Android</a></li>
              <li><a href="#" className="footer-link">IOS</a></li>
              <li><a href="#" className="footer-link">Wordpress</a></li>
              <li><a href="#" className="footer-link">salesforce</a></li> */}
              <li><Link to='/liferay' className="footer-link">Liferay</Link></li>
              <li><Link to='/laravel' className="footer-link">Laravel</Link></li>
              <li><Link to='/react-native' className="footer-link">React Native</Link></li>
              <li><Link to='/android' className="footer-link">Android</Link></li>
              <li><Link to='/ios' className="footer-link">IOS</Link></li>
              <li><Link to='/wordpress' className="footer-link">Wordpress</Link></li>
              <li><Link to='/sales-force' className="footer-link">salesforce</Link></li>

            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper d-none">
          <div>
            <p className="footer-heading">Industries</p>
            <ul>
              {/* <li><a href="#" className="footer-link">EPC</a></li>
              <li><a href="#" className="footer-link">Manufacturing (Pharmaceutical)</a></li>
              <li><a href="#" className="footer-link">Human Resource</a></li>
              <li><a href="#" className="footer-link">Government</a></li>
              <li><a href="#" className="footer-link">Fitness</a></li> */}
              <li><Link to='/' className="footer-link">EPC</Link></li>
              <li><Link to='/' className="footer-link">Manufacturing (Pharmaceutical)</Link></li>
              <li><Link to='/' className="footer-link">Human Resource</Link></li>
              <li><Link to='/' className="footer-link">Government</Link></li>
              <li><Link to='/' className="footer-link">Fitness</Link></li>

            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Services</p>
            <ul>
            <li><Link to='/application-development' className="footer-link">Application Development</Link></li>
            <li><Link to='/internet-of-things' className="footer-link">Internet of Things</Link></li>
            <li><Link to='/it-security-management' className="footer-link">IT Security Management</Link></li>
              <li><Link to='/infrastructure-management' className="footer-link">Infrastructure Management</Link></li>
              <li><Link to='/business-consulting' className="footer-link">Business Consulting</Link></li>
              
              


            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper d-none">
          <div>
            <p className="footer-heading">Applications</p>
            <ul>
              <li><a href="#" className="footer-link">Quarter Management System</a></li>
              <li><a href="#" className="footer-link">Complaint Management System</a></li>
              <li><a href="#" className="footer-link">Purchase Orders Management System</a></li>
              <li><a href="#" className="footer-link">Fitness Application</a></li>


            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Company</p>
            <ul>
              <li><Link to='/about-us' className="footer-link">About Us</Link></li>
              <li><Link to='/blog' className="footer-link">Blog</Link></li>



            </ul>
          </div>
        </div>
        <div className="grid-container-wrapper">
          <div>
            <p className="footer-heading">Connect With us</p>
            <ul>
              <li><Link to='/contact' className="footer-link">India</Link></li>
              <li><a href="https://giks.ca/contact" target="_blank" className="footer-link">Canada</a></li>



            </ul>
          </div>
        </div>
        <div className="d-flex align-items-end  justify-content-end">
           {/* <img src="/images/footer-icon1.png" alt="icon 1" width="100" height="31"/>  */}

        </div>
        <div className="d-flex align-items-end justify-content-start">
          <img src="/images/footer-icon1.png" alt="icon 1" width="100" height="31" className="me-2 footer-icon-apple" />
          <img src="/images/footer-icon2.png" alt="icon 2" width="100" height="31" className="footer-icon-apple"/>
        </div>
      </div>
    </div>
    <div className="container expand-container">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright-box">
            <div className="one">
              <Link to='/'>
              <img src="/images/footer-logo.png" className="w-75" />
              </Link>
              
            </div>
            <div className="two">
              <ul className="mb-0">
                <li><Link to='/privacy-policy' className="footer-link">Privacy Policy</Link></li>
                <li><Link to='/terms-condition' className="footer-link">Terms & Conditions</Link></li>

                <li><a href="#" className="footer-link"><img src="/images/iso.png" className="img-fluid" /></a></li>
              </ul>
            </div>
            <div className="three">
              <ul>
                <li><a href="https://www.instagram.com/infogiksindia/" target='_blank'>
                    <img src="/images/instagram.svg" />
                  </a></li>
                <li><a href="https://twitter.com/infogiksindia" target='_blank'>
                    <img src="/images/twitter.svg" />
                  </a></li>
                <li><a href="https://www.facebook.com/giksindia" target='_blank'>
                    <img src="/images/facebook.svg" />
                  </a></li>
                <li><a href="https://www.linkedin.com/company/8927106/admin/" target='_blank'>
                    <img src="/images/linkedin.svg" />
                  </a></li>
                <li><a href="https://www.youtube.com/channel/UCPunktBBBHc9tTJEncbAbBg" target='_blank'>
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