import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config/configg";

interface Blog{
    "content" : string,
    "title" : string,
    "id" : number,
    "author" : {
        "name" : string
    }
}

export default function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlog] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/allBlogs`,{
        headers: {
            Authorization :localStorage.getItem("token") 
        }
    })
      .then(response => {
        setBlog(response.data.blogs);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  return { loading, blogs };
}
