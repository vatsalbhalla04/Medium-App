import { Hono } from "hono";
import { env } from "hono/adapter";
import { verify } from "hono/jwt";
import { createPrismaClient } from "../lib/primsa";

type Variables = {
  userId: string;
  // defining this is necessary to avoid the type error.
};

const blogRouter = new Hono<{ Variables: Variables }>();

blogRouter.use("/*", async (c, next) => {
  const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c);
  const authHeader = c.req.header("authorization") || "";

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ message: "Missing Authorization Header" }, 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = (await verify(token, JWT_SECRET)) as { id: string };

    if (payload.id) {
      c.set("userId", payload.id);
      await next();
    } else {
      return c.json({ message: "You are not logged in" }, 403);
    }
  } catch (error) {
    return c.json({ message: "Invalid or Expired Token" }, 403);
  }
});

blogRouter.post("/writeBlog", async (c) => {
  const body = await c.req.json();
  const prisma = createPrismaClient(c);
  const userId = c.get("userId");

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json({ id: blog.id }, 201);
  } catch (error) {
    return c.json({ message: `Blog creation failed: ${error}` }, 500);
  }
});

blogRouter.put("/updateBlog", async (c) => {
  const body = await c.req.json();
  const prisma = createPrismaClient(c);

  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({ id: blog.id }, 200);
  } catch (error) {
    return c.json({ message: `Blog update failed: ${error}` }, 500);
  }
});

blogRouter.get("/getBlog/:id", async (c) => {
  const { id } = c.req.param();
  const prisma = createPrismaClient(c);

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!blog) {
      return c.json({ message: "Blog not found" }, 404);
    }

    return c.json({ blog }, 200);
  } catch (error) {
    return c.json({ message: `Fetch failed: ${error}` }, 500);
  }
});

blogRouter.get("/allBlogs", async (c) => {
  const prisma = createPrismaClient(c);

  try {
    const blogs = await prisma.post.findMany();
    return c.json({ blogs }, 200);
  } catch (error) {
    return c.json({ message: `Could not fetch blogs: ${error}` }, 500);
  }
});

export { blogRouter };
