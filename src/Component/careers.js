import React, { useEffect } from 'react'

const Careers = () => {


    return (
        <>
            <section className="about-who-we-are career">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8">
                            <div className="about-single-content">
                                <h1 className="common-heading">Why Work With GIKS</h1>
                                <p className="common-para">
                                    By choosing to work with us, you gain access to a comprehensive portfolio of services tailored to meet your specific needs. Our client-centric approach ensures that we listen to your requirements, develop customized solutions, and deliver outstanding results. With cutting-edge technology, reliable support, scalability, and cost efficiency as our pillars, we empower your business to thrive in a fast-paced and competitive market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='career-acoordian'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h1 class="common-heading mb-lg-5">Current Opportunities</h1>
                        </div>
                        <div className='col-lg-12'>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div> <p className='acc-heading '>
                                                Business development Executive
                                            </p>

                                                <p className='acc-subheading'>
                                                    Full Time
                                                </p></div>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className='row'>
                                                <div className='col-lg-3'>
                                                    <div className='acc-bdy-left'>
                                                        <p className='experience'>
                                                            Experience
                                                        </p>
                                                        <p className='acc-subheading'>
                                                            Fresher can Apply
                                                        </p>
                                                        <button href="#" class="common-btn mt-lg-4 mt-md-4 mt-sm-3 mt-2 d-inline-block bg-transparent">Apply Now</button>
                                                    </div>
                                                </div>
                                                <div className='col-lg-9'>
                                                    <p className='common-para'>
                                                        We are currently seeking a highly motivated and talented individual to join our team as a Business Development Executive. If you are passionate about driving growth, building strong relationships, and identifying new business opportunities, then this could be the perfect role for you.
                                                    </p>
                                                    <p className='fw-bold text-white common-para mb-0 pb-0'>Job Responsibilities:</p>
                                                    <p className='common-para'>
                                                        As a Business Development Executive, you will play a crucial role in driving the company's growth and expanding our customer base. Your responsibilities will include:
                                                    </p>
                                                    <p className='common-para circle'>
                                                        Identifying and pursuing new business opportunities: Researching and analyzing market trends,
                                                        identifying potential clients, and proactively reaching out to them to establish partnerships or secure new projects.

                                                    </p>
                                                    <p className='common-para circle'>
                                                        Building and maintaining relationships: Cultivating strong relationships with existing clients,
                                                        understanding their needs, and identifying opportunities for upselling or cross-selling our products/services.

                                                    </p>
                                                    <p className='common-para circle'>
                                                        Developing sales strategies: Collaborating with the sales and marketing teams to develop effective sales strategies, including setting targets, creating compelling proposals, and presenting solutions to clients.
                                                    </p>
                                                    <p className='common-para circle'>
                                                        Conducting market research: Staying updated on industry trends, competitor activities, and market conditions to identify potential areas for growth and development.
                                                        Negotiating and closing deals: Leading negotiations, preparing contracts, and closing deals with clients to achieve revenue targets and business objectives.
                                                    </p>
                                                    <p className='common-para circle'>
                                                        Collaborating with internal teams: Working closely with various departments, such as marketing, product development, and customer support, to ensure smooth project delivery, customer satisfaction, and ongoing business success.
                                                    </p>
                                                    <p className='fw-bold text-white common-para mb-0 pb-0 mt-4'>Qualifications and Skills:</p>
                                                    <p className='common-para'>
                                                    To excel in this role, you should possess the following qualifications and skills:
                                                    </p>
                                                    <p className='common-para circle'>
                                                    Proven track record in business development or sales, preferably in the [industry/sector] field.

                                                    </p>
                                                    <p className='common-para circle'>
                                                    Strong communication and interpersonal skills, with the ability to build rapport with clients and colleagues at all levels.

                                                    </p>
                                                    <p className='common-para circle'>
                                                    Negotiation and persuasive abilities, with a focus on achieving win-win outcomes.
                                                    </p>
                                                    <p className='common-para circle'>
                                                    Analytical mindset and market research skills to identify new business opportunities and stay ahead of the competition.
                                                    </p>
                                                    <p className='common-para circle'>
                                                    Results-driven and target-oriented, with the ability to work under pressure and meet deadlines.
                                                    </p>
                                                    <p className='common-para circle'>
                                                    Self-motivated and proactive, with the ability to work independently as well as part of a team.
                                                    </p>
                                                    <p className='common-para circle'>
                                                    Bachelor's degree in business administration, marketing, or a related field.
                                                    </p>


                                                </div>
                                            </div>
                                        </div>
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

export default Careers