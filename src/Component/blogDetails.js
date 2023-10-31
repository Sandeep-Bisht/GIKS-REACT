import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import broucher from "../Samplefiles/GIKS_Brochure.pdf";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import {url} from "../urls"

const BlogDetails = () => {
  const param = useParams();
  const location = useLocation();
  const state = location.state;
  const [blogDetails, setBlogDetails] = useState();
  const [blogImage, setBlogImage] = useState();

  useEffect(() => {
    if (param.blog) {
      getBlogDetailBySlug(param.blog);
    }
  }, []);

  const getBlogDetailBySlug = async (slug) => {
  

    let payload = {
      slug: slug,
    };
    try {
      let response = await axios.post(`${url}/blog/get_blog_by_slug`, payload);
      if (response) {
        console.log("check response", response.data)
        // Parse the 'featuredImage' string into a JavaScript object
        // const blogDetail = JSON.parse(response.data.featuredImage);
        console.log("inside get all blog", response.data);
        // setBlogImage(blogDetail);
        setBlogDetails(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const stripHtmlTags = (content) => {
    const doc = new DOMParser().parseFromString(content, "text/html");
    return doc.body.textContent || "";
  };

  console.log("blogImage blogImage blogDetail", blogDetails, "blogImage", blogImage);
  return (
    <>
      <section className="single-blog-page blog-detail">
        <div className="container">
          <div className="row mt-60">
            <div className="col-lg-9 col-md-7 col-sm-7">
              <div className="blog-left-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <p className="blog-detail-heading mb-4">
                      {blogDetails?.title}
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="blog-detail-heading text-white fs-6 fw-lighter">
                      {blogDetails?.description}
                    </p>
                  </div>
                  <div className="col-md-12 mt-lg-4">
                    <div className="single-blog-detail-card">
                      <div className="row">
                        <div className="col-lg-1">
                          <div className="left">
                            <div className="blog-detail-date">
                              <p className="date">27 </p>
                              <p className="month">Oct </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-11">
                          <div className="right">
                            <div className="post-category">
                              <div className="post-category-left">
                                <span className="post-category-heading common-para">
                                  Posted by:GIKS 
                                </span>
                              </div>
                              <div className="post-category-right">
                                <span className="post-category-heading common-para">
                                  Category:Tech 
                                </span>
                              </div>
                            </div>
                            <div className="post-category-comments d-none">
                              <span className="comment-icon">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.96852 15.364L9.35692 17.678C9.42355 17.7891 9.51781 17.881 9.63051 17.9448C9.74321 18.0086 9.87052 18.0422 10 18.0422C10.1295 18.0422 10.2569 18.0086 10.3696 17.9448C10.4823 17.881 10.5765 17.7891 10.6432 17.678L12.0315 15.364C12.0982 15.253 12.1924 15.1611 12.3051 15.0973C12.4178 15.0334 12.5452 14.9999 12.6747 14.9999H18.25C18.4489 14.9999 18.6397 14.9209 18.7803 14.7802C18.921 14.6396 19 14.4488 19 14.2499V2.25C19 2.05109 18.921 1.86032 18.7803 1.71967C18.6397 1.57902 18.4489 1.5 18.25 1.5H1.75007C1.55115 1.5 1.36039 1.57902 1.21974 1.71967C1.07909 1.86032 1.00007 2.05109 1.00007 2.25V14.25C1.00007 14.4489 1.07909 14.6396 1.21974 14.7803C1.36039 14.9209 1.55115 14.9999 1.75007 14.9999L7.32539 14.9999C7.45491 14.9999 7.58222 15.0334 7.69492 15.0973C7.80763 15.1611 7.90189 15.253 7.96852 15.364Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                              <span className="comments-number">
                                6 Comments 
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-lg-4">
                        <div className="col-md-12">
                          <img
                            src={`${url}/${blogDetails?.featuredImage?.path}`}
                            className="img-fluid single-blog-detail-pic"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row mt-lg-4">
                        <div className="col-md-12 blog-html-content">
                        {/* <p className="common-para"> */}
                        {/* {blogDetails?.content} */}
                        <p className="common-para " dangerouslySetInnerHTML={{ __html: blogDetails?.content }} >
                        </p>
                        </div>
                        {/* <div className="col-md-12">
                          <p className="blog-title mb-1">Introduction</p>
                          <p className="common-para">
                            REST, which stands for Representational State
                            Transfer, is a widely used architectural style for
                            building web services that communicate over HTTP.
                            RESTful APIs, also known as REST APIs, are a type of
                            API that adhere to the principles of REST.
                          </p>
                        </div>
                        <div className="col-md-12">
                          <p className="blog-title mb-1">What is a REST API?</p>
                          <p className="common-para">
                            A REST API is a web-based application programming
                            interface (API) that uses HTTP requests to perform
                            four basic operations: Create (POST), Read (GET),
                            Update (PUT), and Delete (DELETE). These operations
                            are often referred to as CRUD operations. REST APIs
                            are stateless, meaning that each request contains
                            all the information needed to complete the request,
                            including authentication credentials, if necessary.
                            This allows for scalability and reliability, as the
                            server doesn't need to maintain any session state
                            between requests.
                          </p>
                        </div>
                        <div className="col-md-12">
                          <p className="blog-title mb-1">
                            How Does a REST API Work?
                          </p>
                          <p className="common-para">
                            A REST API uses a set of rules or constraints to
                            interact with resources on a server. These
                            constraints are defined by the architectural style,
                            which dictates how data should be transmitted and
                            what operations are allowed. The most important
                            constraint of REST is the use of HTTP methods to
                            interact with resources. Each HTTP method
                            corresponds to a specific CRUD operation:
                          </p>
                          <ul className="ps-1 ms-2">
                            <li className="common-para">
                              GET: retrieves a resource or a list of resources
                            </li>
                            <li className="common-para">
                              POST: creates a new resource
                            </li>
                            <li className="common-para">
                              PUT: updates an existing resource
                            </li>
                            <li className="common-para">
                              DELETE: deletes a resource
                            </li>
                          </ul>
                          <p className="common-para">
                            When a client sends an HTTP request to a REST API,
                            it includes a URL that identifies the resource and
                            the HTTP method to be used. The server responds with
                            an HTTP status code that indicates whether the
                            request was successful or not.
                          </p>
                          <p className="common-para">
                            For example, suppose we have a REST API that
                            provides information about books. A client could use
                            a GET request to retrieve a list of all the
                            available books, like this:
                          </p>
                        </div>
                        <div className="col-md-12">
                          <img
                            src="/images/blog-single/code1.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-12 mt-4">
                          <p className="common-para">
                            The server would respond with a JSON representation
                            of the list of books, along with an HTTP status code
                            indicating success:
                          </p>
                        </div>
                        <div className="col-md-12">
                          <img
                            src="/images/blog-single/code2.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-12 mt-lg-3">
                          <p className="blog-title mb-1">
                            Advantages of REST APIs:
                          </p>
                          <p className="common-para">
                            There are several advantages to using REST APIs:
                          </p>
                        </div>
                        <div className="col-md-12">
                          <ol className="ps-1 ms-2">
                            <li className="common-para">
                              Scalability: REST APIs are stateless, meaning that
                              they don't maintain any session state between
                              requests. This makes them highly scalable, as the
                              server doesn't need to keep track of any client
                              state
                            </li>
                            <li className="common-para">
                              Flexibility: REST APIs can be used to interact
                              with a wide variety of resources, including
                              databases, files, and other services.
                            </li>
                            <li className="common-para">
                              Simplicity: Because REST APIs use HTTP methods to
                              interact with resources, they are simple to learn
                              and easy to use.
                            </li>
                            <li className="common-para">
                              Wide adoption: REST APIs have become the de facto
                              standard for building web services, meaning that
                              there are many tools and frameworks available for
                              working with them.
                            </li>
                            <li className="common-para">
                              Cacheable: REST APIs can be made cacheable, which
                              can improve performance and reduce server load.
                            </li>
                          </ol>
                        </div>
                        <div className="col-md-12">
                          <p className="blog-title mb-1">Conclusion:</p>
                          <p className="common-para mb-2">
                            REST APIs have become the standard for building web
                            services that interact with resources over HTTP.
                            They are simple to learn, highly scalable, and
                            flexible enough to work with a wide variety of
                            resources.
                          </p>
                          <p className="common-para">
                            If you're building a web service that needs to
                            interact with resources, consider using a REST API.
                            It will make your service simpler, more scalable,
                            and more widely adopted by other developers.
                          </p>
                        </div>
                        <div className="col-md-12">
                          <ul className="social-link-list ps-0 list-unstyled">
                            <li>
                              <a href="#">
                                <svg
                                  width="12"
                                  height="21"
                                  viewBox="0 0 12 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.7188 7.8125H7.8125V4.6875C7.8125 3.825 8.5125 3.90625 9.375 3.90625H10.9375V0H7.8125C6.5693 0 5.37701 0.49386 4.49794 1.37294C3.61886 2.25201 3.125 3.4443 3.125 4.6875V7.8125H0V11.7188H3.125V20.3125H7.8125V11.7188H10.1562L11.7188 7.8125Z"
                                    fill="#FAFAFA"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.1038 1.70846C14.5556 1.95112 13.9743 2.11035 13.379 2.18085C14.0015 1.80733 14.4776 1.21776 14.6973 0.518332C14.1084 0.867352 13.4645 1.11377 12.7931 1.24706C12.3817 0.805392 11.8467 0.497972 11.2579 0.364899C10.6692 0.231826 10.054 0.279278 9.4926 0.501064C8.93122 0.722849 8.44971 1.10867 8.11088 1.60821C7.77205 2.10774 7.59163 2.6978 7.59316 3.3014C7.59243 3.53185 7.61823 3.76163 7.67006 3.98618C6.4756 3.92628 5.30707 3.61594 4.24029 3.07529C3.17351 2.53465 2.2323 1.77578 1.47773 0.847906C1.09174 1.50934 0.973052 2.29326 1.14595 3.03931C1.31885 3.78537 1.77027 4.43717 2.40786 4.86138C1.93015 4.84641 1.46301 4.71706 1.04563 4.4842V4.52082C1.04563 5.97827 2.08195 7.19403 3.45518 7.46868C3.01341 7.58923 2.54987 7.60677 2.10026 7.51994C2.29229 8.1166 2.66579 8.63843 3.16865 9.01262C3.6715 9.38681 4.27862 9.59468 4.9053 9.60724C4.282 10.0972 3.56818 10.4593 2.80471 10.673C2.04123 10.8866 1.24311 10.9476 0.456055 10.8523C1.78534 11.7055 3.36363 12.1999 5.06276 12.1999C10.5923 12.1999 13.6134 7.62248 13.6134 3.64928C13.6134 3.52112 13.6134 3.39295 13.606 3.26112C14.192 2.84 14.7046 2.30902 15.1074 1.70846H15.1038Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  width="17"
                                  height="17"
                                  viewBox="0 0 17 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.561788 5.66964H3.90311V16.4203H0.561788V5.66964ZM2.23297 0.325543C3.30137 0.325543 4.16943 1.1936 4.16943 2.262C4.16943 3.33145 3.30137 4.19985 2.23297 4.19985C1.97549 4.20472 1.71963 4.15822 1.48033 4.06306C1.24104 3.9679 1.02311 3.82599 0.8393 3.64562C0.655488 3.46526 0.509476 3.25006 0.409802 3.01261C0.310127 2.77516 0.258789 2.52022 0.258789 2.2627C0.258789 2.00517 0.310127 1.75023 0.409802 1.51278C0.509476 1.27533 0.655488 1.06013 0.8393 0.879769C1.02311 0.699404 1.24104 0.557493 1.48033 0.462332C1.71963 0.36717 1.97549 0.320667 2.23297 0.325543ZM5.99894 5.66929H9.2038V7.13839H9.24824C9.69443 6.29325 10.7844 5.40228 12.4097 5.40228C15.793 5.40228 16.418 7.62901 16.418 10.5238V16.4203H13.0788V11.1922C13.0788 9.94568 13.0559 8.34186 11.3427 8.34186C9.60415 8.34186 9.33713 9.69985 9.33713 11.1023V16.4203H5.99859V5.66964L5.99894 5.66929Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5">
              <div className="blog-right-wrapper">
                <div className="row">
                  {/* <div className="col-md-12">
                                        <div className="search-box">
                                            <div className="search-box-wrapper">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Search"
                                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn search-btn" type="button"><i
                                                            className="far fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  {/* <div className="col-md-12">
                                        <p className="blog-right-wrapper-heading">Recent Posts</p>
                                        <div className="recent-post-box">
                                            <p className="border-0">
                                                <a href="#">Company Launches New Software Channel</a>
                                            </p>
                                            <p><a href="#">Paves The way for an eventual merger</a></p>
                                            <p><a href="#">Three quarters of construction workers...</a></p>
                                            <p><a href="#">Retail banks wake up to digital lending</a></p>
                                            <p><a href="#">design breakthrough updates products</a></p>
                                        </div>
                                        <div className="separator"></div>
                                    </div> */}
                  {/* <div className="col-md-12 "> */}
                  {/*                                 
                                   <div className="client-box">
                                    <p className="client-words common-para mb-4">We have chosen to work extensively with
                                        GIKS INDIA because of their quality services, including their On-the-Job
                                        Training progr...
                                    </p>
                                    <div className="client-info">
                                        <div className="client-pic">
                                            <img src="/images/client.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="client-deatail">
                                            <p className="client-name">Client Name</p>
                                            <p className="client-designation common-para">CEO At Ishaanav1</p>
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
                              
                                   <div className="client-box">
                                    <p className="client-words common-para mb-4">We have chosen to work extensively with
                                        GIKS INDIA because of their quality services, including their On-the-Job
                                        Training progr...
                                    </p>
                                    <div className="client-info">
                                        <div className="client-pic">
                                            <img src="/images/client.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="client-deatail">
                                            <p className="client-name">Client Name</p>
                                            <p className="client-designation common-para">CEO At Ishaanav1</p>
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
                                    </div> */}
                  {/* ---------------copy---------------- */}
                  {/* <div id="carouselExampleInterval" class="carousel slide testimonial-slider" data-bs-ride="carousel">
                                            <div class="carousel-inner testimonial-wrapper">
                                               
                                                <div class="carousel-item active" data-bs-interval="10000">
                                                    <div className="client-box">
                                                        <div className='client-logo'>
                                                        <img src="/images/case-study/3.png" className="img-fluid " alt="main-logo" />
                                                        </div>
                                                        <p className="client-words common-para mb-4">
                                                        "Partnering with GIKS India Pvt. Ltd. has been a game-changer for our business. Their team is professional, proactive, and always goes the extra mile. 
                                                       
                                                        </p>
                                                        <div className="client-info">
                                                            <div className="client-pic">
                                                                <img src="/images/client1.jpg" className="img-fluid" alt="" />
                                                            </div>
                                                            <div className="client-deatail">
                                                                <p className="client-name">Devasenapathi Krishnan</p>
                                                                <p className="client-designation common-para">Chairman at Ishaanav Nutraceuticals Pvt. Ltd.</p>
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
                                                <div class="carousel-item" data-bs-interval="2000">
                                                <div className="client-box">
                                                        <div className='client-logo'>
                                                     
                                                        <img src="/images/case-study/7.png" class="img-fluid" alt=""/>
                                                        </div>
                                                        <p className="client-words common-para mb-4">
                                                        "Thanks to GIKS India, our news portal has experienced tremendous growth. Their digital marketing service has significantly increased our website traffic and engagement. 
                                                            
                                                        </p>
                                                        <div className="client-info">
                                                            <div className="client-pic">
                                                                <img src="/images/client2.jpg" className="img-fluid" alt="" />
                                                            </div>
                                                            <div className="client-deatail">
                                                                <p className="client-name">Ajit Sinha</p>
                                                                <p className="client-designation common-para">Pioneer Edge</p>
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
                                                <div class="carousel-item">
                                                <div className="client-box">
                                                        <div className='client-logo'>
                                                        <img src="/images/case-study/2.png" class="img-fluid" alt=""/>
                                                        </div>
                                                        <p className="client-words common-para mb-4">
                                                        "GIKS India has been instrumental in transforming our NHO website. Their tailored approach, attention to detail, and prompt support have been exceptional. Highly recommended."
                                                        </p>
                                                        <div className="client-info">
                                                            <div className="client-pic">
                                                                <img src="/images/client3.png" className="img-fluid" alt="" />
                                                            </div>
                                                            <div className="client-deatail">
                                                                <p className="client-name">Commander K Victor Paul</p>
                                                                <p className="client-designation common-para">National Hydrographic Office.</p>
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
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"><IoIosArrowBack/></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true">
                                                    <IoIosArrowForward/>
                                                </span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div> */}
                  {/* ---------------end------------------ */}

                  {/* </div> */}
                  <div className="col-md-12">
                    <p className="blog-right-wrapper-heading">Tags Widget</p>
                    <ul className="widget-list list-unstyled ps-0">
                      <li>
                        <a href="#" className="widget-list-item">
                          Technology
                        </a>
                      </li>
                      <li>
                        <a href="#" className="widget-list-item">
                          S.E.O
                        </a>
                      </li>
                      <li>
                        <a href="#" className="widget-list-item">
                          UI UX
                        </a>
                      </li>
                      <li>
                        <a href="#" className="widget-list-item">
                          Website Design
                        </a>
                      </li>
                      <li>
                        <a href="#" className="widget-list-item">
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a href="#" className="widget-list-item">
                          Web Applications
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12 d-none">
                    <button className="btn download-brochure">
                      <span className="icon">
                        <svg
                          width="20"
                          height="26"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.25 10.5H7.5C7.83152 10.5 8.14946 10.3683 8.38388 10.1339C8.6183 9.89946 8.75 9.58152 8.75 9.25C8.75 8.91848 8.6183 8.60054 8.38388 8.36612C8.14946 8.1317 7.83152 8 7.5 8H6.25C5.91848 8 5.60054 8.1317 5.36612 8.36612C5.1317 8.60054 5 8.91848 5 9.25C5 9.58152 5.1317 9.89946 5.36612 10.1339C5.60054 10.3683 5.91848 10.5 6.25 10.5ZM6.25 13C5.91848 13 5.60054 13.1317 5.36612 13.3661C5.1317 13.6005 5 13.9185 5 14.25C5 14.5815 5.1317 14.8995 5.36612 15.1339C5.60054 15.3683 5.91848 15.5 6.25 15.5H13.75C14.0815 15.5 14.3995 15.3683 14.6339 15.1339C14.8683 14.8995 15 14.5815 15 14.25C15 13.9185 14.8683 13.6005 14.6339 13.3661C14.3995 13.1317 14.0815 13 13.75 13H6.25ZM20 9.175C19.987 9.06017 19.9618 8.94704 19.925 8.8375V8.725C19.8649 8.59647 19.7847 8.47833 19.6875 8.375L12.1875 0.875C12.0842 0.77777 11.966 0.697601 11.8375 0.6375C11.8002 0.6322 11.7623 0.6322 11.725 0.6375C11.598 0.564677 11.4578 0.51793 11.3125 0.5H3.75C2.75544 0.5 1.80161 0.895088 1.09835 1.59835C0.395088 2.30161 0 3.25544 0 4.25V21.75C0 22.7446 0.395088 23.6984 1.09835 24.4017C1.80161 25.1049 2.75544 25.5 3.75 25.5H16.25C17.2446 25.5 18.1984 25.1049 18.9017 24.4017C19.6049 23.6984 20 22.7446 20 21.75V9.25C20 9.25 20 9.25 20 9.175ZM12.5 4.7625L15.7375 8H13.75C13.4185 8 13.1005 7.8683 12.8661 7.63388C12.6317 7.39946 12.5 7.08152 12.5 6.75V4.7625ZM17.5 21.75C17.5 22.0815 17.3683 22.3995 17.1339 22.6339C16.8995 22.8683 16.5815 23 16.25 23H3.75C3.41848 23 3.10054 22.8683 2.86612 22.6339C2.6317 22.3995 2.5 22.0815 2.5 21.75V4.25C2.5 3.91848 2.6317 3.60054 2.86612 3.36612C3.10054 3.1317 3.41848 3 3.75 3H10V6.75C10 7.74456 10.3951 8.69839 11.0983 9.40165C11.8016 10.1049 12.7554 10.5 13.75 10.5H17.5V21.75ZM13.75 18H6.25C5.91848 18 5.60054 18.1317 5.36612 18.3661C5.1317 18.6005 5 18.9185 5 19.25C5 19.5815 5.1317 19.8995 5.36612 20.1339C5.60054 20.3683 5.91848 20.5 6.25 20.5H13.75C14.0815 20.5 14.3995 20.3683 14.6339 20.1339C14.8683 19.8995 15 19.5815 15 19.25C15 18.9185 14.8683 18.6005 14.6339 18.3661C14.3995 18.1317 14.0815 18 13.75 18Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <a target="_blank" href={broucher}>
                        <span className="icon-heading common-para">
                          Download Brochure
                        </span>
                      </a>
                      {/* <span className="icon-heading common-para">Download Brochure</span> */}
                    </button>
                  </div>
                  <div className="col-md-12">
                    <div className="separator"></div>
                  </div>
                  <div className="col-md-12">
                    <div className="bottom-blog">
                      <a href="#">
                        <div className="bottom-blog-pic">
                          <img src="/images/blog-single/blog9.jpg" />
                        </div>
                        <div>
                          <span className="bottom-blog-heading">
                            Business Planning, Strategy & Execut...
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
                          <img src="/images/blog-single/blog10.jpg" />
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
                          <img src="/images/blog-single/blog11.jpg" />
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
  );
};

export default BlogDetails;
