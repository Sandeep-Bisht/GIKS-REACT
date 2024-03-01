import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../urls";
import {
  FacebookIcon,
  TwitterShareButton,
  LinkedinShareButton,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

const BlogDetails = () => {
  const navigate = useNavigate();
  const currentBlogDetails = useLoaderData();
  const [blogDetails, setBlogDetails] = useState(currentBlogDetails);
  const [categoryBlog,setCategoryBlog] = useState();
  const [title,setTitle]=useState(currentBlogDetails.title);

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
        navigate(`/blog/${slug}`)
        setBlogDetails(response.data);
        // setTitle(response.data.title);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getMonthAndDate=(created_AT)=>{
    const dateString = created_AT;
    const date = new Date(dateString);
    const monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = date.getUTCMonth();
    return monthAbbreviations[monthIndex];
  };

  const getAllBlogs = async () => {
    const response = await axios.get(`${url}/blog/find_all_blog`);
    if (response.data && response.data.length > 0) {
      const categoryRelatedData = response.data.filter((item) => {
        if (blogDetails?.category != null) {
          return blogDetails?.category == item.category;
        }
        return null;
      });
      return setCategoryBlog(categoryRelatedData);
    }
  };

  const getDateAsString = (created_AT) => {
    const date = new Date(created_AT);
    const day = date.getUTCDate();
    return day;
  };

  const currentUrl = window.location.href;

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
                              <p className="date">
                                {getDateAsString(blogDetails?.created_AT)}
                              </p>
                              <p className="month">
                                {getMonthAndDate(blogDetails?.created_AT)}
                              </p>
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
                          <p
                            className="common-para blog-details-content "
                            dangerouslySetInnerHTML={{
                              __html: blogDetails?.content,
                            }}
                          ></p>
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
                    {/* ---------------end------------------ */}
                    {categoryBlog && categoryBlog.length > 0 && (
                      <div className="col-md-12">
                        <p className="" style={{ color: "#fff" }}>
                          Related Blogs
                        </p>
                        {categoryBlog.map((item, index) => {
                          console.log(item, "check the item hurrrrrrrrrrr");
                          return (
                            <>
                              <div
                                className="bottom-blog"
                                key={index}
                                onClick={() => getBlogDetailBySlug(item.slug)}
                              >
                                <a href="#">
                                  <div className="bottom-blog-pic">
                                    <img
                                      src={`${url}/${item?.featuredImage?.path}`}
                                    />
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
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank">
              <FacebookIcon size={30} round={true} style={{marginLeft:"120px"}}/>
            </a>
          <TwitterShareButton
            url={`${url}/${blogDetails?.featuredImage?.path}`}
            quote={blogDetails && blogDetails.title ? blogDetails.title : ""}
            hashtag={blogDetails && blogDetails.title ? blogDetails.title : ""}
          >
            <TwitterIcon
              size={30}
              round={true}
              style={{ marginLeft: "10px" }}
            />
          </TwitterShareButton>
          <LinkedinShareButton
            url={`${url}/${blogDetails?.featuredImage?.path}`}
            quote={blogDetails && blogDetails.title ? blogDetails.title : ""}
            hashtag={"#Giksindia..."}
          >
            <LinkedinIcon
              size={30}
              round={true}
              style={{ marginLeft: "10px" }}
            />
          </LinkedinShareButton>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
