import {Hono} from "hono";
const blogRouter = new Hono(); 

blogRouter.post("/writeBlog",(c)=>{
    return c.text("Write A Blog")
});
blogRouter.put("/updateBlog",(c)=>{
    return c.text("Update A Blog")
});
blogRouter.get("/getBlog/:id",(c)=>{
    return c.text("Get The Blog")
});

export {blogRouter}; 