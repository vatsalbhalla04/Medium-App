import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton ";
import { useBlogs } from "../hooks/blogHooks";

export default function Blog() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppBar />
        <div className="flex justify-center items-center h-[80vh] text-xl text-gray-500 animate-pulse">
          <BlogSkeleton/>
        </div>
      </div>
    );
  }  

  return (
    <div className="min-h-screen bg-gray-50">
      <AppBar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 cursor-default">Your Feed</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name}
              content={blog.content}
              publisedDate={""}
              title={blog.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
