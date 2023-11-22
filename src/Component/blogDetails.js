import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import broucher from "../Samplefiles/GIKS_Brochure.pdf";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {url} from "../urls"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  LinkedinShareButton,
  TwitterIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

const BlogDetails = () => {
  const param = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const [blogDetails, setBlogDetails] = useState();
  const [blogImage, setBlogImage] = useState();
  const [categoryBlog,setCategoryBlog] = useState();

  useEffect(() => {
    if (param.blog) {
      getBlogDetailBySlug(param.blog);
    }
  }, []);
  useEffect(()=>{
    getAllBlogs()
  },[blogDetails])

  const getBlogDetailBySlug = async (slug) => {
    let payload = {
      slug: slug,
    };
    try {
      let response = await axios.post(`${url}/blog/get_blog_by_slug`, payload);
      if (response) {
        // Parse the 'featuredImage' string into a JavaScript object
        // const blogDetail = JSON.parse(response.data.featuredImage);
        // setBlogImage(blogDetail);
        navigate(`/blog/${slug}`)
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
  const getMonthAndDate=(created_AT)=>{
    const dateString = created_AT;
    const date = new Date(dateString);
    const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = date.getUTCMonth();
    return  monthAbbreviations[monthIndex];
}

const getAllBlogs = async () => {
  const response = await axios.get(`${url}/blog/find_all_blog`);
  if(response.data && response.data.length>0)
{
    const categoryRelatedData=response.data.filter((item)=>{
      if(blogDetails?.category!=null)
      {
        return blogDetails?.category==item.category
      }
      return null
  })
  return setCategoryBlog(categoryRelatedData);
}
}

const getDateAsString = (created_AT) => {
    const date = new Date(created_AT);
    const day = date.getUTCDate();
    return day
  };
  console.log(blogDetails,"check current blog details")

  return (
    <>
      <section className="single-blog-page blog-detail">
        <div className="container">
          <div className="row mt-60">
            <div className="col-lg-9 col-md-7 col-sm-7">
              <div className="blog-left-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="blog-detail-heading mb-4">
                      {blogDetails?.title}
                    </h1>
                  </div>
                  <div className="col-md-12 mt-lg-4">
                    <div className="single-blog-detail-card">
                      <div className="row">
                        <div className="col-lg-1">
                          <div className="left">
                            <div className="blog-detail-date">
                              <p className="date">{getDateAsString(blogDetails?.created_AT)}</p>
                              <p className="month">{getMonthAndDate(blogDetails?.created_AT)}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-11">
                          <div className="right">
                            <div className="post-category">
                              <div className="post-category-left">
                                <span className="post-category-heading common-para">
                                  Posted by : GIKS 
                                </span>
                              </div>
                              <div className="post-category-right">
                                <span className="post-category-heading common-para">
                                  {`Category : ${blogDetails?.category}`} 
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
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
                        <div className="row mt-lg-4">
                    <p className="blog-details-heading text-white fs-6 fw-lighter blog-dtails-description">
                      {blogDetails?.description}
                    </p>
                  </div>
                      </div>
                      <div className="row mt-lg-4">
                        <div className="col-md-12 blog-html-content">
                        {/* <p className="common-para"> 
                         {blogDetails?.content} */}
                        <p className="common-para blog-details-content " dangerouslySetInnerHTML={{ __html: blogDetails?.content }} >
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5">
            <aside>
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
                  {
                    categoryBlog && categoryBlog.length>0 &&
                    <div className="col-md-12">
                    <p className="" style={{color:"#fff"}}>Related Blogs</p>
                    {
                      categoryBlog.map((item,index)=>{
                        console.log(item,"check the item hurrrrrrrrrrr")
                        return(
                          <>
                           <div className="bottom-blog" key={index}
                           onClick={()=>getBlogDetailBySlug(item.slug)}>
                            <a href="#">
                              <div className="bottom-blog-pic">
                                <img src={`${url}/${item?.featuredImage?.path}`} />
                              </div>
                              <div>
                                <span className="bottom-blog-heading">
                                  {item.title}
                                </span>
                                <span className="bottom-blog-subheading">
                                  Business Solution
                                </span>
                              </div>
                            </a>
                         </div>
                          </>
                        )
                      })
                    }
                    </div>
                  }
                </div>
              </div>
              </aside>
            </div>
          </div>
        </div>
        <div>
            <FacebookShareButton
            url={`${url}/blog/${blogDetails?.slug}`}
            quote={blogDetails && blogDetails.title?blogDetails.title:""}
            hashtag={"#Giksindia..."}
            imageUrl={blogDetails && blogDetails.featuredImage?blogDetails.featuredImage.path:""}
          >
            <FacebookIcon size={20} round={true} style={{marginLeft:"120px"}}/>
          </FacebookShareButton>
          <TwitterShareButton
            url={`${url}/blog/${blogDetails?.slug}`}
            quote={blogDetails && blogDetails.title?blogDetails.title:""}
            hashtag={"#Giksindia..."}
            imageUrl={blogDetails && blogDetails.featuredImage?blogDetails.featuredImage.path:""}
          >
            <TwitterIcon size={20} round={true} style={{marginLeft:"10px"}}/>
          </TwitterShareButton>
          <LinkedinShareButton
            url={`${url}/blog/${blogDetails?.slug}`}
            quote={blogDetails && blogDetails.title?blogDetails.title:""}
            hashtag={"#Giksindia..."}
            imageUrl={blogDetails && blogDetails.featuredImage?blogDetails.featuredImage.path:""}
          >
            <LinkedinIcon size={20} round={true} style={{marginLeft:"10px"}}/>
          </LinkedinShareButton>
          <WhatsappShareButton
            url={`${url}/blog/${blogDetails?.slug}`}
            quote={blogDetails && blogDetails.title?blogDetails.title:""}
            hashtag={"#Giksindia..."}
            imageUrl={blogDetails && blogDetails.featuredImage?blogDetails.featuredImage.path:""}
          >
            <WhatsappIcon size={20} round={true} style={{marginLeft:"10px"}}/>
          </WhatsappShareButton>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
