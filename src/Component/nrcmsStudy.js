import React from 'react'
import { Link} from 'react-router-dom'

const NorthenRailwayStudy = () => {
  return (
    <>
     <section className="casestudy-singlepage">
         <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="text">
          <h1 className="common-heading">Northern Railways Complaint Management System</h1>
          <p className="common-para">The Northern Railway, which forms the core of the Indian Railways, has undertaken a mission to conquer distances and establish its own identity. It was formally established in 1952 and continues to be the largest zone in terms of route kilometers, even after the reorganization of the Indian Railways into 16 zones. The Northern Railway is now made up of five divisions: Ambala, Delhi, Ferozpur, Lucknow, and Moradabad.
          </p><p className="common-para">One of the core divisions of the Northern Railways is our client, the Delhi Division, which closely collaborates with the Railway Headquarters and the Indian Railway Ministry. This division employs :</p>
          <ul className='text-white'>
            <li>AQMS</li>
            <li>NRCMS</li>
            <li>NRHQQMS</li>
          </ul>
          <p />
          <h3 className="sub-pages-heading1">Analysis and Designing</h3>
          <p className="common-para">The Delhi Division boasts several assets specially designed for railway employees, and the department has identified an opportunity to enhance its operations by automating the Quarters Management System. Mr. Manoj Sharma and the sections under his supervision are spearheading this effort.
          </p><p className="common-para">Previously, the department managed employee infrastructure data through manual processes and books, resulting in delayed reporting and decision-making due to data inaccessibility. The department has recognized the need to streamline these processes and improve efficiency through automation.</p>
          <p />
          <h3 className="sub-pages-heading1">Development and Testing</h3>
          <p className="common-para">Following successful discussions with section users and departmental authorities, a modified and enriched workflow has been formulated for development. GIKS was consulted, and requirements were gathered to create a formal document outlining the necessary functionalities.
          </p><p className="common-para">The document captures the specific requirements and desired outcomes identified during consultations, ensuring that the final product meets the needs of all stakeholders. With this roadmap in place, the team is now poised to begin the development process, incorporating cutting-edge technologies and agile development methodologies to deliver a high-quality product that exceeds expectations.</p>
          <ul className='text-white'>
            <li>User Management</li>
            <li>Scalable Infrastructure Resource Management</li>
            <li>Requisition Management</li>
            <li>Prioritisation and Allocation</li>
            <li>Management Reporting</li>
          </ul><p />
          <p className="common-para">
            After deciding the workflow and prioritisation logic as per the rules and regulations of the northern railways we decided to developed in Platform Laravel Framework, which allows extensive digital customer experience, Scalability, and robustness.
          </p>
          <h3 className="sub-pages-heading1">Go-Live</h3>
          <p className="common-para">The portal is Successfully Designed, developed, tested and deployed on the live web server, with implementation of following technologies:
          </p><ul className='text-white'>
            <li>Laravel</li>
            <li>MySQL Database.</li>
            Programming Skills involved in development :
            <li>JSF</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Velocity</li>
            <li>Lucene</li>
            <li>Kaleo Workflow Engine</li>
            <li>My SQL</li>
            <li>Selenium “Testing Tool”</li>
          </ul>
          <p />
          <h3 className="sub-pages-heading1">Extension and Scalability Plan</h3>
          <p className="common-para">The system can be implemented in any government organisation with infrastructure management for Resources. The Delhi Division, Northern Railways Management has decided to go for an integrated Complaint management System with GIKS for the employees residing in the railways quarters.</p>
          <p className="common-para">
            The Department has already associated with GIKS India for Automated Complaint Management System with Intelligent Complaint Escalations in Integration with Web Based House Allocation and Priority Management System.
          </p>
          <Link to="/contact" className="nav-link text-white text-uppercase fw-bold  mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block download-brochure">
                Contact Us
             </Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="pic">
          <Link to="http://nrcms.in/" target='_blank'>
        <img src="/images/nrcms.png" className='img-fluid' alt='freindsclub' />
        </Link>
        </div>
      </div>
    </div>
          </div>
      </section>

    </>
  )
}

export default NorthenRailwayStudy