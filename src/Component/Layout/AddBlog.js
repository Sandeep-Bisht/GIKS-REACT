import React from "react";
import { Formik, Form, Field } from "formik";
import JoditEditor from "jodit-react";
import { useMutation } from "react-query";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import slugify from "react-slugify";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { url } from "../../urls"

const AllBlog = () => {
  const [allBlogs, setAllBlogs] = useState(undefined);
  const [searchVal, setSearchVal] = useState();
  const [addBlog, setAddBlog] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const [editableBlogs, setEditableBlogs] = useState("")

  useEffect(() => {
    if (location?.state) {
      setEditableBlogs(location?.state)
    }
  }, [location])

  const createData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", data.image);
      formData.append("content", data.content);
      formData.append("category", data.category);
      formData.append("slug", slugify(data.title));
      const response = await axios.post(`${url}/blog/add_blog`, formData);
      if (response.status == 200) {
        setAddBlog(false);
        navigate("/dashboard/blogs")
      }
      return response;
    } catch (error) {
      console.log(error, "check the error")
    }
  };

  const updateData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", data.image ? data.image : editableBlogs ? editableBlogs.featuredImage.path : "");
      formData.append("content", data.content);
      formData.append("category", data.category);
      formData.append("slug", editableBlogs ? editableBlogs.slug : "");
      const response = await axios.put(`${url}/blog/update_blog_by_slug`, formData);
      if (response.status == 200) {
        setAddBlog(false);
        navigate("/dashboard/blogs")
      }
      return response;
    } catch (error) {
      console.log(error, "check the error")
    }
  }

  const mutation = useMutation(editableBlogs ? updateData : createData);


  const searchHandler = () => {
    const filteredData = allBlogs.filter((value) => {
      return value.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    setAllBlogs(filteredData);
  };


  return (
    <section className="container-fluid pt-5">
      <div className="row">
        <div className="col-md-12">
          {/* <h1 className="common-heading d-flex align-items-center justify-content-center mb-4" style={{color:"#007DFF"}}>
            Create Blogs
          </h1> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Formik
            initialValues={location && location.state ? location.state : {}}
            onSubmit={mutation.mutate}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="title">Title:</label>
                      <Field
                        className="form-control text-dark"
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={(e) => setFieldValue("title", e.target.value)}
                      />

                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <Field
                        className="form-control text-dark"
                        type="text"
                        id="description"
                        name="description"
                        value={values.description}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="image">Image:</label>
                      <input
                        className="form-control text-dark"
                        type="file"
                        id="image"
                        name="image"
                        onChange={(event) => {
                          setFieldValue(
                            "image",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="category">Category:</label>
                      <select
                        className="form-control text-dark"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={(event) => {
                          setFieldValue("category", event.target.value);
                        }}
                      >
                        <option value="">Select a category</option>
                        <option value="Software">Software</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Internet of things">Internet of things</option>
                        <option value="Network Security">Network Security</option>
                        <option value="Virtual Reality">Virtual Reality</option>
                      </select>
                    </div>
                  </Col>

                </Row>
                {
                  editableBlogs ?
                    <Row>
                      <Col md={12}>
                        <div className="form-group" >
                          {
                            values.image ? "" : <img style={{ width: "80px", height: "80px" }} src={values.image ? "" : `${url}/${editableBlogs.featuredImage.path}`}></img>
                          }
                        </div>
                      </Col>
                    </Row>
                    :
                    ""
                }
                <div className="col-md-12">
                  <label htmlFor="content">Content:</label>
                  <JoditEditor
                    id="content"
                    name="content"
                    value={values.content}
                    onChange={(value) => setFieldValue("content", value)}
                  />
                </div>

                {
                  editableBlogs ?
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={mutation.isLoading}
                    >
                      {mutation.isLoading ? "Updating..." : "Update"}
                    </button>
                    :
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={mutation.isLoading}
                    >
                      {mutation.isLoading ? "Submitting..." : "Submit"}
                    </button>
                }
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default AllBlog;
