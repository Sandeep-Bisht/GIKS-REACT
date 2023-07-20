import React from 'react'
import { Link} from 'react-router-dom'


const QuarterManagmentStudy = () => {
  return (
    <>
      <section className="casestudy-singlepage">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="text">
                <h2 className="common-heading">Northern Railway Headquarters Quarter Management System:</h2>
                 <p className='common-para'>
                 An end-to-end web portal application that is developed to automate business processes. 
                 The development of this application involves customization to meet specific requirements. 
                 The application is built using integrated Hybrid Wordpress and Laravel frameworks, which are popular 
                 and widely used in web development. The integration of these frameworks ensures the best results and enhances 
                 customer experiences. By combining the strengths of both frameworks, the development team can leverage the flexibility 
                 and scalability of Laravel along with the user-friendly content management capabilities of Wordpress. 
                 This integrated approach allows for efficient development and a seamless user experience within the web portal application.
                 </p>
                 <Link to="/contact" className="nav-link text-white text-uppercase fw-bold  mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block download-brochure">
                Contact Us
             </Link>
                 
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="pic">
                <img src="/images/nrhqqms.png" classname="img-fluid" alt="freindsclub" />
                <div className="title">
                  <a href="http://nrhqqms.com/" target='_blank' className="btn ">go to site</a>
                </div>
              </div>
              <div className="connect">
                <a href="http://nrhqqms.com/" target='_blank' className='text-white text-decoration-underline'>nrhqqms.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default QuarterManagmentStudy