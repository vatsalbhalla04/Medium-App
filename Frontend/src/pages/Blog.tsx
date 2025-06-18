import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/blogHooks";

export default function Blog() {
  
  const { loading, blogs } = useBlogs();
    
      if (loading) {
        return (
          <div className="flex justify-center items-center h-screen text-xl text-gray-500">
            Loadinggggg....
          </div>
        );
      }
  return (
    
    <div> 
      <AppBar/>
      <div>
      </div>
    <div>{
      blogs.map(blog => <BlogCard authorName={blog.author.name} content={blog.content}
        publisedDate={""}
        title={blog.title}
        />)
      }
    </div>
    </div>
  );
}
