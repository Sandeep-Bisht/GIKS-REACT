import React from 'react'
import { Link} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
       <section className="error-page">
       <div className="container error-page-container">
           <div className="row">
                <div className="col-lg-12">
                      <div className="error-page-wrapper">
                          <h1>
                              <span className="one">4</span>
                              <span className="two">0</span>
                              <span className="one">4</span>
                          </h1>
                          <p className="error-page-msg">
                            We are sorry, but the page you requested was not found
                          </p>
                          <div className="error-page-gohome-link">
                            <Link to="/" className="error-page-btn home">Go Home</Link>
                            <Link to="/contact" className="error-page-btn contact">Contact Us</Link>
                          </div>
                      </div>
                </div>
           </div>
       </div>
    </section> 
    </>
  )
}

export default PageNotFound