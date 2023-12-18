import axios from "axios";
import { url } from "../urls";

export const getAllBlogs = async () =>{
    try{
        const response = await axios.get(`${url}/blog/find_all_blog`);
        return response.data;
    }
    catch(error){
        return error.message || "An error occured while trying to get user profile."
    }
} 

export const getBlogBySlug = async ({params}) => {
      try {
        let response = await axios.post(`${url}/blog/get_blog_by_slug`, {slug:params.blog});
        if (response) {
          return response.data;
        }
      } catch (error) {
        return error.message || "An error occured while trying to get service request."
      }
  };