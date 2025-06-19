import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/configg";

interface UpdateBlogInput {
  id: string;
  title: string;
  content: string;
}

export function useUpdateBlog() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const updateBlog = async (input: UpdateBlogInput) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.put(`${BACKEND_URL}/api/v1/blog/updateBlog`, input, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to update blog");
    } finally {
      setLoading(false);
    }
  };

  return {
    updateBlog,
    loading,
    error,
    success,
  };
}
