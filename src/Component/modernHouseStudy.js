import React from 'react'
import { Link} from 'react-router-dom'

const ModernHouseStudy = () => {
    return (
        <>
            <section className="casestudy-singlepage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-8">
                            <div className="text">
                                <h2 className="common-heading">Modern House of Antiques</h2>
                                <p className="common-para">
                                The beneficiary of our product is a premium Antiques provider, with a Physical store, We discussed and finalised the technical architecture while proposing Custom Liferay and React based, with implemented Headless API’s of Liferay E Commerce.</p>
                               
                                <p />
                                <h3 className="sub-pages-heading1">Our solution</h3>
                                <p className="common-para">
                                We are experts in developing and customising E-Commerce portals based on Liferay eCommerce solution. 
                                Liferay is one of the best eCommerce application worldwide and it is an open source product that 
                                successfully competes with the alternative commercial solutions.
                                </p>
                                <ul className='text-white'>
                                    <li>Designed and Developed a complete Online Presence with Liferay E-commerce solution and utilising React JS on the front End for scalability and advance UI/ UX.</li>
                                    <li>Developed a custom Architecture with automated ordering & payment which 
                                        allows the customers to manage their own payment, Shippings from their account. 
                                        The same actions can be made from the admin panel.</li>
                                    <li>Built a Fragment based Approach that allows the admin to add new custom landing pages 
                                        with multiple configurable products and specific coupon codes. Also multiple reports are 
                                        being sent automatically (daily) with sales reports and other data.</li>
                                        <li>
                                           Developed a custom landing page with a forecast calculator that allows our customers to find out how much product to order, which is also being sent automatically in pdf format to the email our customer has provided.
                                        </li>
                                </ul>
                                <h3 className="sub-pages-heading1">Team setup</h3>
                                <p className='common-para mb-2'>
                                We embrace Agile methodologies in most of our projects. Many times it is our customers and partners who ask us to use Agile methodologies (Scrum , Kanban) from the inception of the project. When the choice is left to our engineers, we carefully analyze the project specifics, and we propose a project management methodology based on Scrum or Kanban which best fits the specific needs and context.
                                </p>
                                <p className='common-para'>
                                We had a core project team of Five developers and one designer for this project. Depending on the project stage and necessities more people were relocated to this project. They were working in close collaboration with our customer team.
                                </p>
                                <p className='common-para mb-2'>
                                As in all of our projects, we worked in an agile and flexible way. We had daily scrum meetings with sprints and demo release every two weeks.
                                </p>
                                <h3 className="sub-pages-heading1">Architecture</h3>
                                <p className='common-para mb-2'>
                                The Project is developed in a first of its kind collaboration of Liferay DXP and React JS, The project applies the conventions of object-oriented programming and model view controller architecture, but also uses the entity attribute value model to store data.
                                </p>
                                <h3 className="sub-pages-heading1">Technologies</h3>
                                <p className='common-para mb-2'>Liferay, JAVA, ReactJS and MySQL</p>
                                <p className='common-para mb-2'>Amazon Web Services (AWS – EC2, S3, CloudFront, RDS, Elastic Cache, VPC, Route 53)</p>
                                <p className='common-para'>Liferay DXP 7.4, Elastic Search, Apache, Click (Kanban)</p>
                                <Link to="/contact" className="nav-link text-white text-uppercase fw-bold  mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block download-brochure">
                Contact Us
             </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-4">
                            <div className="pic">
                                <img src="/images/mha.png" className='img-fluid' alt='freindsclub' />
                                <div className="title">
                                    <a href="https://modernhouseofantiques.com" target='_blank' className="btn ">go to site</a>
                                </div>
                            </div>
                            <div className="connect">
                                <a href="https://modernhouseofantiques.com" target='_blank' className='text-white text-decoration-underline'>https://modernhouseofantiques.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ModernHouseStudy