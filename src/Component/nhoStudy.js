import React from 'react'
import { Link} from 'react-router-dom'

const NationalHydrographicStudy = () => {
    return (
        <>
            <section className="casestudy-singlepage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="text">
                                <h2 className="sub-pages-heading1">National Hydrographic Office:</h2>
                                <p className="common-para">
                                The National Hydrographic Office (NHO) is the organization responsible for surveying and charting India's waterways, and their website is a crucial tool for sharing information with stakeholders and the public. When the NHO approached our team for help with a website redesign, we were eager to take on the challenge.
                                </p>
                                <p className='common-para'>
                                After careful consideration, we recommended WordPress as the ideal framework for the new website. WordPress offered the flexibility and scalability needed to meet the NHO's unique needs while providing an easy-to-use content management system (CMS) that would enable the organization to keep its website up to date with the latest news and information.
                                </p>
                                <p className='common-para'>
                                To ensure that the new website would meet the NHO's needs, we worked closely with their team to identify key functionalities and features that were essential for their business. We conducted in-depth research on the industry, competitors, and user behavior to develop a comprehensive understanding of the NHO's target audience and their requirements.
                                </p>
                                <p className='common-para'>
                                We then moved into the development phase, working with the NHO team to create a visually engaging website design that aligned with their brand identity and reflected the organization's mission and values. The new website was optimized for search engines, ensuring that it would be easy to find and attract visitors interested in the NHO's services and information.
                                </p>
                                <Link to="/contact" className="nav-link text-white text-uppercase fw-bold  mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block download-brochure">
                Contact Us
             </Link>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pic">
                                <img src="/images/hydrobharat.png" className='img-fluid' alt='freindsclub' />
                                <div className="title">
                                    <a href="https://hydrobharat.gov.in/" target='_blank' className="btn"> go to site</a>
                                </div>
                            </div>
                            <div className="connect">
                                <a href="https://hydrobharat.gov.in/" target='_blank' className='text-white text-decoration-underline'>hydrobharat.gov.in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NationalHydrographicStudy