import React from 'react'
import { Link} from 'react-router-dom'

const VirtualEvent = () => {
    return (
        <>
            <section className="about-who-we-are repeated-hero-banner Virtual-Event-Management">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-10">
                            <div className="about-single-content">
                                <h1 className="common-heading">Virtual Event Management</h1>
                                <p className="common-para">
                                While nothing can be done for physical events right now, we can help you pivot your event from a physical event to a fully virtual one. Whether you are transitioning from physical to virtual events or looking to optimize your existing virtual event strategy, we provide the expertise and support needed to ensure a successful and memorable virtual event experience.
                                </p>
                                <Link to="/contact" className="nav-link common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-about">
                <div className="container">

                    <div className="row mt-60">
                        <div className="col-lg-12 ">
                            <h2 className="sub-pages-heading">Key Features</h2>
                            <p className="common-para">
                                No matter what your industry is, GIKS has experience in helping organisations of all shapes and sizes to better plan, manage, market, and analyse their events and meetings.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-lg-4">
                        <div className="col-lg-12">
                            <p className="product-services-box-heading mb-lg-1">
                                Flexible & Configurable</p>
                            <p className="common-para">
                                Combine any number of spaces and designs to create your virtual event.
                            </p>
                            <p className="product-services-box-heading mb-lg-1">
                                Registration</p>
                            <p className="common-para">
                                Capture attendee details prior to event access for easy post-event communication.
                            </p>

                            <p className="product-services-box-heading mb-lg-1">

                                Engaging Presentations</p>
                            <p className="common-para">
                                It is a brain child of years of industry experts who have handcrafted solutions for the next generation.
                                Every day, we constantly strive to improve our solutions and thus bring a lot of value to your own personal well-being.
                            </p>
                            <p className="product-services-box-heading mb-lg-1">
                                Entitlements & Attendee groups</p>
                            <p className="common-para">
                                Present the right content to the right audience with powerful entitlement options.
                            </p>
                            <p className="product-services-box-heading mb-lg-1">
                                Gamification</p>
                            <p className="common-para">
                                Incentivize attendees to interact throughout the environment with games, contests, and more.
                            </p>
                            <p className="product-services-box-heading mb-lg-1">
                                Social Networking & Connection</p>
                            <p className="common-para">
                                Bring attendees together to network and collaborate via chat and social channels.
                            </p>
                        </div>
                    </div>
                    {/* ---------copy----------------- */}
                    <div className="row mt-60">
                        <div className="col-lg-12 ">
                            <h2 className="sub-pages-heading">
                                
                      Everything you need to optimize your events at scale

                            </h2>
                            <p className="common-para">
                            We introduces GIKS to global markets, optimizes the event experience, and extends the shelf-life of event content so companies can improve engagement and increase event ROI.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-lg-4">
                        <div className="col-lg-12">
                            <p className="product-services-box-heading mb-lg-1">
                            Scalability</p>
                            <p className="common-para">
                            Our virtual events platforms are hosted in the cloud, allowing companies to expand to accommodate any size audience.
                            </p>
                            <p className="product-services-box-heading mb-lg-1">
                            Enterprise-level Security</p>
                            <p className="common-para">
                            Our platform complies with the most stringent enterprise security requirements, with features including whitelisting, blacklisting, and secure cookie handling.
                            </p>

                            <p className="product-services-box-heading mb-lg-1">

                            The HTML Advantage</p>
                            <p className="common-para">
                                Our virtual event software stands out as the sole solution developed with HTML5, ensuring a seamless mobile experience and comprehensive cross-platform support.
                            </p>
                            <p className="product-services-box-heading mb-lg-1">
                                
                       Detailed Metrics and Reporting</p>
                            <p className="common-para">
                            Our platform tracks and measures your event ROI. Gain insight into user behaviour and content preferences and track quality leads.
                            </p>
                            <p className="product-services-box-heading mb-lg-1">
                            Choice of Rooms and Spaces</p>
                            <p className="common-para">
                            From single conference rooms to full-size events featuring exhibit halls, booths, lounges, and more, Our software customizes your platform to meet your needs.
                            </p>
                            <p className="product-services-box-heading mb-lg-1">
                            Social Networking & Interactions</p>
                            <p className="common-para">
                            Interact directly with your virtual event attendees and expand the dialog with live chats, polls, RSS feeds, and social media.
                            </p>
                        </div>
                        <div className='col-lg-12'>
             <Link to="/ishaanav-study"   target='_blank'    className="nav-link text-white text-uppercase fw-bold  mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block download-brochure">
                Case Study
             </Link>
             </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VirtualEvent