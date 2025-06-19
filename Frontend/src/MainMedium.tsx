import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Signin from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DetailBlogPage } from "./pages/DetailBlogPage";
import { LandingPage } from "./pages/LandingPage";
import { WriteBlog } from "./pages/WriteBlog";

export default function MainMedium() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/getBlog/:id" element={<DetailBlogPage/>} />
          <Route path="/blog/writeBlog/" element={<WriteBlog/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}
