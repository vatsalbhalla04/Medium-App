import { Hono } from "hono";
import { createPrismaClient } from "../lib/primsa";
import { zValidator } from "@hono/zod-validator";
import {} from "./../";
import { sign } from "hono/jwt";
import { env } from "hono/adapter";
import { signinInput, signupInput } from "@vatsalbhalla03/medium-common";

const userRoute = new Hono();

userRoute.post("/signup", zValidator("json", signupInput), async (c) => {
  try {
    const prisma = createPrismaClient(c);
    const body = c.req.valid("json");

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });

    return c.json({ message: "User created", user }, 201);
  } catch (err) {
    console.error("Signup Error:", err);
    return c.json({ error: "Something went wrong" }, 500);
  }
});

userRoute.post("/signin", zValidator("json", signinInput), async (c) => {
  try {
    const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c);
    const prisma = createPrismaClient(c);
    const { email, password } = await c.req.json();

    const user = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      return c.json({ error: "Invalid email or Password" }, 401);
    }

    const token = await sign(
      { id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 }, // 1 hour
      JWT_SECRET
    );

    return c.json({ token }, 200);
  } catch (error) {
    console.error("Signin Error:", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

export { userRoute };
