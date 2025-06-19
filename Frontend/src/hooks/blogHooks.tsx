import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config/configg";

export interface BlogProps {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export  function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/allBlogs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  return { loading, blogs };
}

export function useBlog({id}:{id:string}){
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogProps[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/getBlog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, [id]);

  return { loading, blog };
}
