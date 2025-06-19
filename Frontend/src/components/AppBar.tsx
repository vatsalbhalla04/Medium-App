import { Link } from "react-router-dom";
import logo from "/src/assets/medium.svg";



export default function AppBar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/blogs" className="flex items-center space-x-2 group">
          <img src={logo} alt="Medium Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold text-gray-800 group-hover:text-slate-600 transition">
            Medium
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/blog/writeBlog">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 text-white text-sm font-semibold rounded-full border-2 border-white hover:bg-green-700 hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              New Blog
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
