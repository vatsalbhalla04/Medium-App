import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Signin from "./pages/signin";
import { Signup } from "./pages/signup";

export default function MainMedium(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/blog/:id" element={<Blog/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}