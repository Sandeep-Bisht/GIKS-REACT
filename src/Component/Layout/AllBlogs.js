import React from "react";
import { Formik, Form, Field } from "formik";
import { Table, Input, Space, Popconfirm, Typography } from "antd";
import { MdPlaylistAdd } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import JoditEditor from "jodit-react";
import { useMutation } from "react-query";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import slugify from "react-slugify";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {url} from "../../urls"

const AllBlog = () => {
  const [allBlogs, setAllBlogs] = useState(undefined);
  const [searchVal, setSearchVal] = useState();

  const navigate=useNavigate();

  
    useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    const response = await axios.get(`${url}/blog/find_all_blog`);
    setAllBlogs(response.data);
  };

  const createData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", data.image);
      formData.append("content", data.content);
      formData.append("slug", slugify(data.title));
      const response = await axios.post(`${url}/blog/add_blog`, formData);
      if(response.status==200)
      {
        getAllBlogs();
      }
      return response;
    } catch (error) {
      console.log(error,"check the error")
    }
  };

  const mutation = useMutation(createData);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Image",
      dataIndex: "featuredImage.path",
      key: "featuredImage",
      render: (text, record) => (
        <img className="w-25" src={`${url}/${record.featuredImage.path}`} />
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      width: "20%",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => handleEdit(record,record.slug)} // Add this line to handle the edit action
            className="edit-icon-wrap"
            title="Edit"
            style={{ color: "green" }}
          >
            <BsPencilSquare className="text-success" />
          </a>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <a
              className="delete-icon-wrap"
              title="Delete"
              style={{ color: "blue" }}
            >
              <BsTrash className="text-danger" />
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  

  const searchHandler = () => {
    const filteredData = allBlogs.filter((value) => {
      return value.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    setAllBlogs(filteredData);
  };

  const onChangeHandler = (e) => {
    setSearchVal(e.target.value);
    if (e.target.value === "") {
      getAllBlogs();
    }
  };

  const handleDelete = async (id) => {
    try {
      const DeletedData = await axios.delete(`${url}/blog/delete_blogById`,{data : {id:id}});
      getAllBlogs();
    } catch (error) {
      console.log(error)
    }
  };

  const handleEdit=(record,slug)=>{
      navigate(`/dashboard/blogs/add-blog`,{state:{...record}})
  }

  const AddNewBlog = ()=>{
    navigate("/dashboard/blogs/add-blog")
  }

  return (
    <section className="container-fluid pt-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="common-heading d-flex align-items-center justify-content-center mb-4">
                <span className="bar one"></span>All Blogs
                <span className="bar two"></span>
              </h1>
            </div>
          </div>
          <div className="row px-0 dashboard-container">
            <div className="col-md-12">
              <div className="all-products-details-section">
                <div className="blog-header">
                  <div>
                    <button
                      className="common-add"
                      onClick={() => AddNewBlog()}
                    >
                      <MdPlaylistAdd />
                      Add
                    </button>
                  </div>

                  <div>
                  <div className="common-search-bar">
                  <input
                    type="text"
                    
                    onChange={(e) => onChangeHandler(e)}
                    onKeyUp={searchHandler}
                    placeholder="Search.."
                    enterButton
                    style={{ position: "sticky", top: "0", left: "0" }}
                  />
                  <button type="button" className="dashboard-search-btn">
                    <BiSearchAlt />
                  </button>
                </div>
                  </div>
                </div>
              </div>
              <Table
                rowKey="name"
                dataSource={allBlogs && allBlogs.length ? allBlogs : ""}
                columns={columns}
                pagination={false}
              />
            </div>
          </div>
    </section>
  );
};

export default AllBlog;
