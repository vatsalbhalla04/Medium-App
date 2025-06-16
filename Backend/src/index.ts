import { Hono } from 'hono'
import { userRoute } from './Routes/user'
import { blogRouter } from './Routes/blog';

const app = new Hono()

app.route("/api/v1/user",userRoute);
app.route("/api/v1/blog",blogRouter);

export default app
