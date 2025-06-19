import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import DetailBlogComp from "../components/DetailBlogComp";
import { useBlog, useBlogs } from "../hooks/blogHooks";
import { useEffect } from "react";
import { BlogSkeleton } from "../components/BlogSkeleton ";

export function DetailBlogPage() {
  const { id } = useParams();
  const {blogs} = useBlogs();
  const { blog, loading } = useBlog({
    id: id || ""
  });

  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[id])

/*
  The useEffect hook is after the return, which means React will never reach it.
  
  It needs to be above the if (loading || !blog) block, because React hooks must run unconditionally at the top level.

*/
  if (loading || !blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppBar />
        <div className="flex justify-center items-center h-[80vh]">
          <p className="text-xl font-medium text-gray-500 animate-pulse">
          <BlogSkeleton/>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <AppBar />
      <DetailBlogComp blog={blog} blogs={blogs} />
      </div>
  );
}
