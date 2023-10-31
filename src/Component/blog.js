import React,{useEffect,useState} from 'react'
import { Link,useParams,useLocation,useNavigate } from 'react-router-dom'
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
import axios from 'axios'
import {url} from "../urls";

const Blog = () => {

    const navigate = useNavigate()
  const [blog, setBlog] = useState()
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllBlogs();
  }, []);


    const getAllBlogs = async () => {
        const response = await axios.get(`${url}/blog/find_all_blog`);
        setBlog(response.data)
      }

      console.log(blog,"check the all blog ")
      const blogDetailsHandler=(item,slug)=>{
        navigate(`/blog/${slug}`, { state :{ ...item }})
    }

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
                        {
                            blog && blog.length>0 ? blog.map((item,index)=>{
                                console.log(item,"check the button")
                                return(
                                    <>
                             <div className="blog-single-card" key={index}
                             onClick={()=>blogDetailsHandler(item,item.slug)}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-single-card-pic">
                                        <div className="blog-date">
                                            <p className="date">27</p>
                                            <p className="month">May</p>
                                        </div>
                                        <img src={`${url}/${item.featuredImage.path}`} className="img-fluid" alt="blog-pic" />
                                    </div>
                                </div>
                                <div className="col-lg-8 ">
                                    <div className="blog-single-card-content">
                                        <p className="blog-title">{item.title}</p>
                                        <p className="blog-category common-para">
                                            Category:Tech
                                        </p>
                                        <p className="common-para">
                                           {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                    </>
                                )
                            }) :
                            ""
                        }

                    </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5">
                    <div className="blog-right-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="blog-right-wrapper-heading">Recent Posts</p>
                                {
                                    blog && blog.length>0 ? blog.map((item,index)=>{
                                        <div className="recent-post-box">
                                        <p className="border-0">
                                            <a href="#">{item.title}</a></p>
                                    </div>
                                    })
                                    :
                                    null
                                }
                                <div className="separator"></div>
                            </div>
                            <div className="col-md-12">
                            <div id="carouselExampleInterval" class="carousel slide testimonial-slider" data-bs-ride="carousel">
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