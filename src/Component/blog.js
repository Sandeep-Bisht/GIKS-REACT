import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
        <section className="single-blog-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="common-heading text-center">Blog</h1>
                </div>
            </div>
            <div className="row mt-60 mob-col-reverse">
                <div className="col-lg-9 col-md-7 col-sm-7">
                    <div className="blog-left-wrapper">
                        <div className="blog-single-card">
                            <Link to="/blog-detail">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src="/images/blog-single/blog1.jpg" className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">Understanding the Basics and Advantages of REST APIs</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                            In this blog post, we'll explore what a REST API is, how it works, and its
                                            advantages over other types of APIs.
                                        </p>
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                        <div className="blog-single-card">
                            <Link to="/blog-detail">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src="/images/blog-single/blog2.jpg" className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">The Internet of Things: Revolutionizing Industries and
                                            Changing ...</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                            The Internet of Things (IoT) is revolutionizing the way we live and work.
                                            It's a network of connected devices and sensors that gather data and
                                            communicate with each other...
                                        </p>
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                        <div className="blog-single-card">
                            <Link to="/blog-detail">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src="/images/blog-single/blog3.jpg" className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">Developing Custom Software in Liferay is advantageous in
                                            several ways</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                            Liferay is an open-source platform for creating web portals and websites,
                                            and it offers a range of features and tools for developing custom software
                                            solutions.
                                        </p>
                                    </div>
                                </div>
                            </div></Link>

                        </div>
                        <div className="blog-single-card">
                            <Link to="/blog-detail">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src="/images/blog-single/blog4.jpg" className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">What is OpenAI: A Comprehensive Overview of the Artificial
                                            ...</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                            OpenAI is a research company that aims to develop and promote friendly AI in
                                            a way that benefits humanity as a whole.
                                        </p>
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                        <div className="blog-single-card">
                            <Link to="/blog-detail">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src="/images/blog-single/blog5.jpg" className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">Agile Manifesto and its principles</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                            The Agile Manifesto is a set of guiding values and principles for Agile
                                            software development. It was first introduced in 2001 by a group of
                                            software...
                                        </p>
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                        <div className="blog-single-card">
                            <Link to="/blog-detail">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src="/images/blog-single/blog6.jpg" className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">Why IT Infrastructure Management is Important</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                            Technology has impacted and enhanced the way companies do business,
                                            including communication, productivity, and the speed of options trading. For
                                            this reason...
                                        </p>
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                        <div className="blog-single-card">
                            <Link to="/blog-detail">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src="/images/blog-single/blog7.jpg" className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">Challenges of IoT in agriculture</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                            There may be a lack of awareness of the potential benefits of IoT in
                                            agriculture among farmers and other industry professionals. IoT technology
                                            can be used to improve...
                                        </p>
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                        <div className="blog-single-card">
                            <Link to="/blog-detail">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src="/images/blog-single/blog8.jpg" className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">Successful SEO strategies for your Website</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                            The main thing you need to do prior to building up your SEO procedure for
                                            2021 is survey your present SEO system and how it is performing. You should
                                            evaluate...
                                        </p>
                                    </div>
                                </div>
                            </div></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5">
                    <div className="blog-right-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search-box">
                                    <div className="search-box-wrapper">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Search"
                                                aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <button className="btn search-btn" type="button"><i
                                                        className="far fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p className="blog-right-wrapper-heading">Recent Posts</p>
                                <div className="recent-post-box">
                                    <p className="border-0">
                                        <a href="#">Company Launches New Software Channel</a></p>
                                    <p><a href="#">Paves The way for an eventual merger</a></p>
                                    <p><a href="#">Three quarters of construction workers...</a></p>
                                    <p><a href="#">Retail banks wake up to digital lending</a></p>
                                    <p><a href="#">design breakthrough updates products</a></p>
                                </div>
                                <div className="separator"></div>
                            </div>
                            <div className="col-md-12">
                                <div className="client-box">
                                    <p className="client-words common-para mb-4">We have chosen to work extensively with
                                        GIKS INDIA because of their quality services, including their On-the-Job
                                        Training progr...</p>

                                    <div className="client-info">
                                        <div className="client-pic">
                                            <img src="/images/client.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="client-deatail">
                                            <p className="client-name">Client Name</p>
                                            <p className="client-designation common-para">CEO At Ishaanav</p>
                                        </div>

                                    </div>
                                    <div className="quote-box text-end mt-3">

                                        <svg width="81" height="59" viewBox="0 0 81 59" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.77 58.71C16.27 58.71 13.26 58.08 10.74 56.82C8.22 55.56 6.26 53.74 4.86 51.36C3.32 49.4 2.13 46.81 1.29 43.59C0.590001 40.37 0.240001 37.15 0.240001 33.93C0.240001 26.93 1.99 20.49 5.49 14.61C9.13 8.58999 14.73 3.82999 22.29 0.329988L24.18 4.10999C20.26 5.78999 16.76 8.37999 13.68 11.88C10.6 15.38 8.78 18.95 8.22 22.59C7.52 25.67 7.52 28.61 8.22 31.41C11.3 28.05 15.36 26.37 20.4 26.37C25.3 26.37 29.29 27.84 32.37 30.78C35.45 33.58 36.99 37.5 36.99 42.54C36.99 47.44 35.31 51.36 31.95 54.3C28.73 57.24 24.67 58.71 19.77 58.71ZM63.03 58.71C59.53 58.71 56.52 58.08 54 56.82C51.48 55.56 49.52 53.74 48.12 51.36C46.58 49.4 45.39 46.81 44.55 43.59C43.85 40.37 43.5 37.15 43.5 33.93C43.5 26.93 45.25 20.49 48.75 14.61C52.39 8.58999 57.99 3.82999 65.55 0.329988L67.44 4.10999C63.52 5.78999 60.02 8.37999 56.94 11.88C53.86 15.38 52.04 18.95 51.48 22.59C50.78 25.67 50.78 28.61 51.48 31.41C54.56 28.05 58.62 26.37 63.66 26.37C68.56 26.37 72.55 27.84 75.63 30.78C78.71 33.58 80.25 37.5 80.25 42.54C80.25 47.44 78.57 51.36 75.21 54.3C71.99 57.24 67.93 58.71 63.03 58.71Z"
                                                fill="white" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p className="blog-right-wrapper-heading">Tags Widget</p>
                                <ul className="widget-list list-unstyled ps-0">
                                    <li>
                                        <a href="#" className="widget-list-item">Technology</a>
                                    </li>
                                    <li>
                                        <a href="#" className="widget-list-item">S.E.O</a>
                                    </li>
                                    <li>
                                        <a href="#" className="widget-list-item">UI UX</a>
                                    </li>
                                    <li>
                                        <a href="#" className="widget-list-item">Website Design</a>
                                    </li>
                                    <li>
                                        <a href="#" className="widget-list-item">Graphic Design</a>
                                    </li>
                                    <li>
                                        <a href="#" className="widget-list-item">Web Applications</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-12">
                                <button className="btn download-brochure">
                                    <span className="icon">
                                        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.25 10.5H7.5C7.83152 10.5 8.14946 10.3683 8.38388 10.1339C8.6183 9.89946 8.75 9.58152 8.75 9.25C8.75 8.91848 8.6183 8.60054 8.38388 8.36612C8.14946 8.1317 7.83152 8 7.5 8H6.25C5.91848 8 5.60054 8.1317 5.36612 8.36612C5.1317 8.60054 5 8.91848 5 9.25C5 9.58152 5.1317 9.89946 5.36612 10.1339C5.60054 10.3683 5.91848 10.5 6.25 10.5ZM6.25 13C5.91848 13 5.60054 13.1317 5.36612 13.3661C5.1317 13.6005 5 13.9185 5 14.25C5 14.5815 5.1317 14.8995 5.36612 15.1339C5.60054 15.3683 5.91848 15.5 6.25 15.5H13.75C14.0815 15.5 14.3995 15.3683 14.6339 15.1339C14.8683 14.8995 15 14.5815 15 14.25C15 13.9185 14.8683 13.6005 14.6339 13.3661C14.3995 13.1317 14.0815 13 13.75 13H6.25ZM20 9.175C19.987 9.06017 19.9618 8.94704 19.925 8.8375V8.725C19.8649 8.59647 19.7847 8.47833 19.6875 8.375L12.1875 0.875C12.0842 0.77777 11.966 0.697601 11.8375 0.6375C11.8002 0.6322 11.7623 0.6322 11.725 0.6375C11.598 0.564677 11.4578 0.51793 11.3125 0.5H3.75C2.75544 0.5 1.80161 0.895088 1.09835 1.59835C0.395088 2.30161 0 3.25544 0 4.25V21.75C0 22.7446 0.395088 23.6984 1.09835 24.4017C1.80161 25.1049 2.75544 25.5 3.75 25.5H16.25C17.2446 25.5 18.1984 25.1049 18.9017 24.4017C19.6049 23.6984 20 22.7446 20 21.75V9.25C20 9.25 20 9.25 20 9.175ZM12.5 4.7625L15.7375 8H13.75C13.4185 8 13.1005 7.8683 12.8661 7.63388C12.6317 7.39946 12.5 7.08152 12.5 6.75V4.7625ZM17.5 21.75C17.5 22.0815 17.3683 22.3995 17.1339 22.6339C16.8995 22.8683 16.5815 23 16.25 23H3.75C3.41848 23 3.10054 22.8683 2.86612 22.6339C2.6317 22.3995 2.5 22.0815 2.5 21.75V4.25C2.5 3.91848 2.6317 3.60054 2.86612 3.36612C3.10054 3.1317 3.41848 3 3.75 3H10V6.75C10 7.74456 10.3951 8.69839 11.0983 9.40165C11.8016 10.1049 12.7554 10.5 13.75 10.5H17.5V21.75ZM13.75 18H6.25C5.91848 18 5.60054 18.1317 5.36612 18.3661C5.1317 18.6005 5 18.9185 5 19.25C5 19.5815 5.1317 19.8995 5.36612 20.1339C5.60054 20.3683 5.91848 20.5 6.25 20.5H13.75C14.0815 20.5 14.3995 20.3683 14.6339 20.1339C14.8683 19.8995 15 19.5815 15 19.25C15 18.9185 14.8683 18.6005 14.6339 18.3661C14.3995 18.1317 14.0815 18 13.75 18Z" fill="white"/>
                                        </svg>
                                    </span>
                                    <span className="icon-heading common-para">Download Brochure</span>
                                </button>
                            </div>
                            <div className="col-md-12">
                                <div className="separator"></div>
                            </div>
                            <div className="col-md-12">
                                <div className="bottom-blog">
                                    <a href="#">
                                        <div className="bottom-blog-pic">
                                            <img src="/images/blog-single/blog9.jpg"/>
                                        </div>
                                       <div>
                                          <span className="bottom-blog-heading">Business Planning, Strategy &
                                            Execut...
                                          </span>
                                          <span className="bottom-blog-subheading">
                                            Business Solution
                                          </span>
                                       </div>

                                        
                                    </a>
                                </div>
                                <div className="bottom-blog">
                                    <a href="#">
                                        <div className="bottom-blog-pic">
                                            <img src="./images/blog-single/blog10.jpg"/>
                                        </div>
                                       <div>
                                          <span className="bottom-blog-heading">
                                            DEVELOPING A STRATEGY AND ROADMAP FOR CL... 
                                           </span>
                                          <span className="bottom-blog-subheading">
                                            Marketing
                                          </span>
                                       </div>

                                        
                                    </a>
                                </div>
                                <div className="bottom-blog">
                                    <a href="#">
                                        <div className="bottom-blog-pic">
                                            <img src="/images/blog-single/blog11.jpg"/>
                                        </div>
                                       <div>
                                          <span className="bottom-blog-heading">
                                            MANAGEMENT OF GENERATION CHANGES IN BUSI...
                                           </span>
                                          <span className="bottom-blog-subheading">
                                            Consumer Products
                                          </span>
                                       </div>

                                        
                                    </a>
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

export default Blog