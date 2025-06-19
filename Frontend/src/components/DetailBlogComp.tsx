import type { BlogProps } from "../hooks/blogHooks";
import BlogCard from "./BlogCard";

export default function DetailBlogComp({
  blog,
  blogs
}: {
  blog: BlogProps;
  blogs: BlogProps[];
}) {
  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen px-6 sm:px-10 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {blog.title}
        </h1>
        <div className="text-slate-500 mb-2">Posted on 2nd December 2023</div>
        <p className="text-md text-gray-500 mb-8">
          By <span className="font-semibold text-gray-700">{blog.author.name}</span>
        </p>
        <div className="text-lg text-gray-800 leading-relaxed tracking-wide whitespace-pre-line">
          {blog.content}
        </div>
      </div>

      {/* Related blogs */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedBlogs.map((related) => (
            <BlogCard
              key={related.id}
              id={related.id}
              title={related.title}
              authorName={related.author.name}
              content={related.content}
              publisedDate=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}
