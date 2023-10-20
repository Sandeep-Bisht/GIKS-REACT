import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import sliderVideo from "../video/video-bg.mp4";
import aboutVideo from "../video/giks-logo-animation.mp4";

const Homepage = () => {
  useEffect(() => {
    const customScript = `
    $(document).ready(function() {

      const cards = document.querySelectorAll('.case-study-card')
      
      cards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.add('expand');
        });
      
        const closeBtn = card.querySelector('.cross');
      
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('expand');
        });
        });
      
      
      $(".tab-slider").owlCarousel({
        items: 5,
        nav: true,
        dots: false,
        mouseDrag: true,
        autoplay: false,
        center: true,
        smartSpeed: 700,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            767:{
                     items: 1
            },
            768: {
                items: 5
            },
            1200: {
                items: 5
            },
      
            1920: {
                items: 5
            },
      
            3840: {
                items: 5
            }
      
      
      
        }
      });
      
     $(".tab-slider").owlCarousel({
        items: 5,
        nav: true,
        dots: false,
        mouseDrag: true,
        autoplay: false,
        center: true,
        smartSpeed: 700,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            767:{
                     items: 1
            },
            768: {
                items: 5
            },
            1200: {
                items: 5
            },
      
            1920: {
                items: 5
            },
      
            3840: {
                items: 5
            }
      
      
      
        }
      });
      



      $(".owl-carousel").owlCarousel({
              autoplay: false,
              items: 1,
              loop: true,
              nav: true,
              navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
              onInitialized: counter, //When the plugin has initialized.
              onTranslated: counter //When the translation of the stage has finished.
            });
      
            function counter(event) {
              var element = event.target; // DOM element, in this example .owl-carousel
              var items = event.item.count; // Number of items
              var item = event.item.index + 1; // Position of the current item
      
              // it loop is true then reset counter from 1
              if (item > items) {
                item = item - items;
              }
              $("#counter").html("<span class='counterone'>0</span><span class='counterone'>" + item + "</span> <span class='counterone'>/</span><span class='conterfour'>" + items + "</span>");
            }
      
      });

     
      `;

    const script = document.createElement("script");
    script.textContent = customScript;

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className="home-banner">
        <div class="video-container">
          <video
            class="video-item"
            src={sliderVideo}
            autoPlay
            loop
            playsInline
            muted
          />
        </div>
        <div className="container home-banner-container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-10">
              <div className="home-banner-left">
                <p className="banner-title f1">
                  <span className="one">Inn</span>
                  <span className="two">ova</span>
                  <span className="three">ting</span>{" "}
                  <span className="four">Tec</span>
                  <span className="five-second">hno</span>
                  <span className="five">logi</span>
                  <span className="six">es</span>
                </p>
                <p className="banner-subtitle f1">Delivering Solutions</p>
                <p className="common-para">
                  Offering customized and innovative solutions for scalable
                  enterprises. We specialize in Providing software development
                  services that cater to the unique needs and requirements for
                  the organizations.
                </p>
                <a
                  href="#"
                  className="common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block"
                >
                  <Link to="/digital-experience-platform" className="nav-link ">
                    Read More
                  </Link>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 home-banner-second-col">
              {/* <img src="/images/banner.gif" className="img-fluid banner-pic" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <section className="home-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-5 col-sm-5">
              <div className="home-about-pic">
                <video
                  class=""
                  src={aboutVideo}
                  autoPlay
                  playsInline
                  loop
                  muted
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-7">
              <div className="home-about-content text-center">
                <h1 className="common-heading">About Us</h1>
                <p className="common-subheading">
                  We deliver tailor-made fast, secure, and business process
                  automation solutions.
                </p>
                <p className="common-para">
                  We are the leading Software Development Company in India
                  providing Digital solutions for businesses Our team of experts
                  is dedicated to delivering high-quality software services that
                  meet the specific needs of each client. From web and mobile
                  app development to custom software solutions, we offer a
                  comprehensive range of services that cater to a variety of
                  industries.
                </p>

                <Link
                  to="/about-us"
                  className="common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-service">
        <div className="grid-one">
          <img src="/images/service-grid-one.png" />
        </div>
        <div className="grid-two">
          <img src="/images/service-grid-two.png" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="common-heading ">Products</h2>
            </div>
          </div>
          <div className="row mt-60 common-padding-25">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="product-card">
                <div className="product-card-pic">
                  <img src="/images/products/1.gif" />
                </div>
                <div className="product-card-content">
                  <p className="product-card-heading">
                    Digital Experience Platform
                  </p>
                  <p className="common-para">
                    Deliver personalized experiences for the entire customer
                    journey.
                  </p>
                  <div className="product-read-more-wrapper">
                    <Link
                      to="/digital-experience-platform"
                      className="product-read-more"
                    >
                      Click to Read More
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.29744 0.467468L1.32745 2.40357L8.96926 2.28513L0.772362 10.7401L2.16184 12.0872L10.3587 3.6322L10.4772 11.274L12.4133 11.244L12.2436 0.297809L1.29744 0.467468Z"
                          fill="#007DFF"
                        />
                      </svg>
                      <div className="product-read-more-border"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="product-card">
                <div className="product-card-pic">
                  <img src="/images/products/2.gif" />
                </div>
                <div className="product-card-content">
                  <p className="product-card-heading">
                    Integrated Estate
                    <br />
                    Management System
                  </p>
                  <p className="common-para">
                    To ensure integration with existing work practices
                  </p>
                  <div className="product-read-more-wrapper">
                    <Link
                      to="/integrated-estate-management-system"
                      className="product-read-more"
                    >
                      Click to Read More
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.29744 0.467468L1.32745 2.40357L8.96926 2.28513L0.772362 10.7401L2.16184 12.0872L10.3587 3.6322L10.4772 11.274L12.4133 11.244L12.2436 0.297809L1.29744 0.467468Z"
                          fill="#007DFF"
                        />
                      </svg>
                      <div className="product-read-more-border"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="product-card">
                <div className="product-card-pic">
                  <img src="/images/products/3.gif" />
                </div>
                <div className="product-card-content">
                  <p className="product-card-heading">
                    Intelligent Ticketing
                    <br />
                    Management
                  </p>
                  <p className="common-para">
                    Easiest and fastest way to improve great customer Service
                  </p>
                  <div className="product-read-more-wrapper">
                    <Link
                      to="/intelligent-ticketing-management"
                      className="product-read-more"
                    >
                      Click to Read More
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.29744 0.467468L1.32745 2.40357L8.96926 2.28513L0.772362 10.7401L2.16184 12.0872L10.3587 3.6322L10.4772 11.274L12.4133 11.244L12.2436 0.297809L1.29744 0.467468Z"
                          fill="#007DFF"
                        />
                      </svg>
                      <div className="product-read-more-border"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="product-card">
                <div className="product-card-pic">
                  <img src="/images/products/4.gif" />
                </div>
                <div className="product-card-content">
                  <p className="product-card-heading">
                    Virtual Event Management
                  </p>
                  <p className="common-para">
                    While nothing can be done for physical events right now
                  </p>
                  <div className="product-read-more-wrapper">
                    <Link
                      to="/virtual-event-Management"
                      className="product-read-more"
                    >
                      Click to Read More
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.29744 0.467468L1.32745 2.40357L8.96926 2.28513L0.772362 10.7401L2.16184 12.0872L10.3587 3.6322L10.4772 11.274L12.4133 11.244L12.2436 0.297809L1.29744 0.467468Z"
                          fill="#007DFF"
                        />
                      </svg>
                      <div className="product-read-more-border"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-slider">
        <div className="vertical-text-box">
          <span> Our Core Services</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel">
                <div className="slides">
                  <div className="row">
                    <div className="col-lg-4 slider-left col-md-4 col-sm-4 col-4">
                      <h2 className="common-heading">
                        IT Infrastructure
                        <br />
                        Management
                      </h2>
                      <p className="common-para slider-content">
                        Infrastructure management involves overseeing IT
                        policies, processes, equipment, information, HR, and
                        external contacts (such as vendors or security
                        associations).
                      </p>
                      <Link
                        to="/infrastructure-Management"
                        className="common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          {/* <h2 className="common-heading">
                          Internet of<br/>
                         Things
                        </h2>
                        <p className="common-para slider-content">
                          IoT services comprise strategic consulting,development,data
                          analytics,and application Management aimed at helping
                          organizations solve their business challenges via IoT technology.
                        </p>  */}
                        </div>
                        <img src="/images/slider4.jpg" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slides">
                  <div className="row">
                    <div className="col-lg-4 slider-left col-md-4 col-sm-4 col-4">
                      <h2 className="common-heading">
                        Business
                        <br />
                        Consulting
                      </h2>
                      <p className="common-para slider-content">
                        Business Process Consulting refers to the practice of
                        analysing, evaluating, and improving the operational
                        processes within an organization.
                      </p>
                      <Link
                        to="/business-consulting"
                        className="common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          {/* <h2 className="common-heading">
                          Internet of<br/>
                         Things
                        </h2>
                        <p className="common-para slider-content">
                          IoT services comprise strategic consulting,development,data
                          analytics,and application Management aimed at helping
                          organizations solve their business challenges via IoT technology.
                        </p>  */}
                        </div>
                        <img src="/images/slider5.jpg" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slides">
                  <div className="row">
                    <div className="col-lg-4 slider-left col-md-4 col-sm-4 col-4">
                      <h2 className="common-heading">
                        Application
                        <br />
                        Development
                      </h2>
                      <p className="common-para slider-content">
                        As a leading application development company in India,
                        we excel in providing cutting-edge application
                        development solutions.
                      </p>
                      <Link
                        to="/application-development"
                        className="common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                      <div className="slider-wrapper">
                        {/* <div className="slider-content">
                        <h2 className="common-heading">
                          Application<br/>
                          Development12
                        </h2>
                        <p className="common-para slider-content">
                          We create custom applications at pace of business need. Here is why GIKS Rapid application
                          development methodology is the right fit to create enterprise-grade custom applications
                        </p>
                      </div>  */}
                        <div className="img-overlay">
                          <img
                            src="/images/slider2.jpg"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slides">
                  <div className="row">
                    <div className="col-lg-4 slider-left  col-md-4 col-sm-4 col-4">
                      <h2 className="common-heading">Internet of Things</h2>
                      <p className="common-para slider-content">
                        Our IOT Services provide a complete range of solutions,
                        including hardware, software, connectivity, and
                        analytics.
                      </p>
                      <Link
                        to="/internet-of-things"
                        className="common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="col-lg-8  col-md-8 col-sm-8 col-8">
                      <div className="slider-wrapper">
                        {/* <div className="slider-content">
                        <h2 className="common-heading">
                          Internet of<br/>
                         Things
                        </h2>
                        <p className="common-para slider-content">
                          IoT services comprise strategic consulting,development,data
                          analytics,and application Management aimed at helping
                          organizations solve their business challenges via IoT technology.
                        </p>
                      </div>  */}
                        <img src="/images/slider1.jpg" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slides">
                  <div className="row">
                    <div className="col-lg-4 slider-left  col-md-4 col-sm-4 col-4">
                      <h2 className="common-heading">IT Security Management</h2>
                      <p className="common-para slider-content">
                        With a team of highly skilled professionals, we offer
                        comprehensive solutions to safeguard your digital assets
                        and protect against evolving cybersecurity threats.
                      </p>
                      <Link
                        to="/it-security-management"
                        className="common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="col-lg-8  col-md-8 col-sm-8 col-8">
                      <div className="slider-wrapper">
                        {/* <div className="slider-content">
                        <h2 className="common-heading">
                          Application<br/>
                          Development
                        </h2>
                        <p className="common-para slider-content">
                          We create custom applications at pace of business need. Here is why GIKS Rapid application
                          development methodology is the right fit to create enterprise-grade custom applications
                        </p>
                      </div>  */}
                        <img src="/images/slider3.jpg" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="counter"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-case-studies">
        <div className="container common-padding-25">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="common-heading">Case Studies</h2>
              <p className="common-para">
                Explore our case studies to see how we've helped our clients
                achieve their goals with our innovative solutions.
              </p>
            </div>
          </div>
          <div className="row case-study-card-row">
            <div className="col-lg-3 col-3">
              <div className="case-study-card">
                <div className="upper-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="first-view">
                  <div className="case-study-pic">
                    <img
                      src="/images/case-study/1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="case-study-heading">Friends Club</div>
                </div>
                <div className="second-view">
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <div className="cross">
                        <i className="far fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="second-view-wrapper">
                        <div className="left">
                          <div className="case-study-second">
                            <img src="/images/freindsclub.svg" />
                          </div>
                          <div className="case-study-second-content">
                            <p className="case-study-second-content-heading">
                              Freinds Club
                            </p>
                            <p className="common-para">
                              We developed the Friends Club official website
                              using the Laravel framework. Friends Club is a
                              social based in india with a large and active
                              membership base.
                            </p>
                            <div className="right">
                              <div>
                                <Link
                                  to="/friends-club-study"
                                  className="common-btn  d-inline-block"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-3">
              <div className="case-study-card">
                <div className="upper-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="first-view">
                  <div className="case-study-pic">
                    <img
                      src="/images/case-study/2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="case-study-heading">
                    National Hydrographic
                  </div>
                </div>
                <div className="second-view">
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <div className="cross">
                        <i className="far fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="second-view-wrapper">
                        <div className="left">
                          <div className="case-study-second">
                            <img src="/images/nho.svg" />
                          </div>
                          <div className="case-study-second-content">
                            <p className="case-study-second-content-heading">
                              National Hydrographic
                            </p>
                            <p className="common-para">
                              The National Hydrographic Office (NHO) is the
                              organization responsible for surveying and
                              charting India's waterways, and their website is a
                              crucial tool for sharing information with
                              stakeholders and the public. When the NHO
                              approached our team for help with a website
                              redesign, we were eager to take on the challenge
                            </p>
                            <div className="right">
                              <div>
                                <Link
                                  to="/national-hydrographic-study"
                                  className="common-btn  d-inline-block"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-3">
              <div className="case-study-card">
                <div className="upper-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="first-view">
                  <div className="case-study-pic">
                    <img
                      src="/images/case-study/3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="case-study-heading">Ishaanav</div>
                </div>
                <div className="second-view">
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <div className="cross">
                        <i className="far fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="second-view-wrapper">
                        <div className="left">
                          <div className="case-study-second">
                            <img src="/images/ishana.svg" />
                          </div>
                          <div className="case-study-second-content">
                            <p className="case-study-second-content-heading">
                              Ishaanav Nutraceuticals Pvt Ltd
                            </p>
                            <p className="common-para">
                              The contract pharmaceutical manufacturing business
                              client faced obstacles in managing customer
                              relationships, purchase orders, production
                              processes, and invoicing. Their operations relied
                              on manual systems that were laborious,
                              error-prone, and lacked real-time insights.
                            </p>
                            <div className="right">
                              <div>
                                <Link
                                  to="/ishaanav-study"
                                  className="common-btn  d-inline-block"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-3">
              <div className="case-study-card">
                <div className="upper-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="first-view">
                  <div className="case-study-pic">
                    <img
                      src="/images/case-study/4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="case-study-heading">
                    Jaimaica Business Gateway
                  </div>
                </div>
                <div className="second-view">
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <div className="cross">
                        <i className="far fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="second-view-wrapper">
                        <div className="left">
                          <div className="case-study-second">
                            <img src="/images/nbp.svg" />
                          </div>
                          <div className="case-study-second-content">
                            <p className="case-study-second-content-heading">
                              Jamaica Business Gateway
                            </p>
                            <p className="common-para">
                              The Jamaica Business Gateway is an online platform
                              developed to streamline business-related
                              processes, foster economic growth, and enhance
                              connectivity within the Jamaican business
                              community.
                            </p>
                            <div className="right">
                              <div>
                                <Link
                                  to="/jaimaica-study"
                                  className="common-btn  d-inline-block"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-3">
              <div className="case-study-card">
                <div className="upper-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="first-view">
                  <div className="case-study-pic">
                    <img
                      src="/images/case-study/5.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="case-study-heading">NRCMS</div>
                </div>
                <div className="second-view">
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <div className="cross">
                        <i className="far fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="second-view-wrapper">
                        <div className="left">
                          <div className="case-study-second">
                            <img src="/images/railway.svg" />
                          </div>
                          <div className="case-study-second-content">
                            <p className="case-study-second-content-heading">
                              Northern Railways
                            </p>
                            <p className="common-para">
                              The Northern Railway, which forms the core of the
                              Indian Railways, has undertaken a mission to
                              conquer distances and establish its own identity.
                              It was formally established in 1952 and continues
                              to be the largest zone in terms of route
                              kilometers, even after the reorganization of the
                              Indian Railways into 16 zones. The Northern
                              Railway is now made up of five divisions: Ambala,
                              Delhi, Ferozpur, Lucknow, and Moradabad.
                            </p>
                            <div className="right">
                              <div>
                                <Link
                                  to="/nrcms-study"
                                  className="common-btn  d-inline-block"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-3">
              <div className="case-study-card">
                <div className="upper-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="first-view">
                  <div className="case-study-pic">
                    <img
                      src="/images/case-study/6.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="case-study-heading">
                    JGC Gulf International Co. Ltd.
                  </div>
                </div>
                <div className="second-view">
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <div className="cross">
                        <i className="far fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="second-view-wrapper">
                        <div className="left">
                          <div className="case-study-second">
                            <img src="/images/jgc-logo.svg" />
                          </div>
                          <div className="case-study-second-content">
                            <p className="case-study-second-content-heading">
                              JGC Gulf International Co. Ltd.
                            </p>
                            <p className="common-para">
                              (JGC Gulf) is a leading engineering, procurement,
                              and construction company that specializes in
                              delivering innovative solutions for the oil and
                              gas, petrochemical, and other industries. When JGC
                              Gulf approached our team for help with their
                              website redesign, we were excited to take on the
                              challenge.
                            </p>
                            <div className="right">
                              <div>
                                <Link
                                  to="/jgc-study"
                                  className="common-btn  d-inline-block"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-3">
              <div className="case-study-card">
                <div className="upper-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="first-view">
                  <div className="case-study-pic">
                    <img
                      src="/images/case-study/7.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="case-study-heading">The Pioneer Edge</div>
                </div>
                <div className="second-view">
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <div className="cross">
                        <i className="far fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="second-view-wrapper">
                        <div className="left">
                          <div className="case-study-second">
                            <img src="/images/pioneer.svg" />
                          </div>
                          <div className="case-study-second-content">
                            <p className="case-study-second-content-heading">
                              The Pioneer Edge
                            </p>
                            <p className="common-para">
                              Pioneer Edge is a news portal dedicated to
                              providing news and information related to the
                              state of Uttarakhand in India. It covers a wide
                              range of topics including politics, business,
                              entertainment, sports, and more. The website aims
                              to be a one-stop destination for people looking
                              for news and information related to Uttarakhand.
                            </p>
                            <div className="right">
                              <div>
                                <Link
                                  to="/pioneer-study"
                                  className="common-btn  d-inline-block"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3- col-3">
              <div className="case-study-card">
                <div className="upper-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="first-view">
                  <div className="case-study-pic">
                    <img
                      src="/images/case-study/8.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="case-study-heading">INCA India</div>
                </div>
                <div className="second-view">
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <div className="cross">
                        <i className="far fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="second-view-wrapper">
                        <div className="left">
                          <div className="case-study-second">
                            <img src="/images/inca-circle.svg" />
                          </div>
                          <div className="case-study-second-content">
                            <p className="case-study-second-content-heading">
                              INCA India
                            </p>
                            <p className="common-para">
                              This case study focuses on the Indian National
                              Cartographic Association (INCA) and its website.
                              INCA is a professional organization based in India
                              that aims to promote the field of cartography,
                              support geospatial professionals, and enhance
                              cartographic practices in the country.
                            </p>
                            <div className="right">
                              <div>
                                <Link
                                  to="/inca-study"
                                  className="common-btn  d-inline-block"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-icons">
                  <div className="left">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <img
                      src="/images/expand-icon.gif"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-blog ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="common-heading">Blog</h2>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-md-12">
              <div className="carousel-wrapper">
                <ul className="owl-carousel owl-theme tab-slider list-unstyled">
                  <li>
                    <div className="item">
                      <Link to="/blog-detail">
                        <div className="blog-card">
                          <div className="blog-pic">
                            <img
                              src="/images/blog/1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="blog-content">
                            <p className="blog-heading">
                              The Internet of Things: Revolutionizing Industries
                              and Changing the Way We Live and Work
                            </p>
                            <span className="common-read-more">Read more</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <Link to="/blog-detail">
                        <div className="blog-card">
                          <div className="blog-pic">
                            <img
                              src="/images/blog/2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="blog-content">
                            <p className="blog-heading">
                              The Internet of Things: Revolutionizing Industries
                              and Changing the Way We Live and Work
                            </p>
                            <span className="common-read-more">Read more</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <Link to="/blog-detail">
                        <div className="blog-card">
                          <div className="blog-pic">
                            <img
                              src="/images/blog/3.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="blog-content">
                            <p className="blog-heading">
                              The Internet of Things: Revolutionizing Industries
                              and Changing the Way We Live and Work
                            </p>
                            <span className="common-read-more">Read more</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="one">
                    <div className="item">
                      <Link to="/blog-detail">
                        <div className="blog-card">
                          <div className="blog-pic">
                            <img
                              src="/images/blog/4.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="blog-content">
                            <p className="blog-heading">
                              The Internet of Things: Revolutionizing Industries
                              and Changing the Way We Live and Work
                            </p>
                            <span className="common-read-more">Read more</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="two">
                    <div className="item">
                      <Link to="/blog-detail">
                        <div className="blog-card">
                          <div className="blog-pic">
                            <img
                              src="/images/blog/5.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="blog-content">
                            <p className="blog-heading">
                              The Internet of Things: Revolutionizing Industries
                              and Changing the Way We Live and Work
                            </p>
                            <span className="common-read-more">Read more</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
