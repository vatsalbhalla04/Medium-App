import { Hono } from 'hono'
import { userRoute } from './Routes/user'
import { blogRouter } from './Routes/blog';
import {cors} from 'hono/cors'
const app = new Hono()

app.use(cors());

app.route("/api/v1/user",userRoute);
app.route("/api/v1/blog",blogRouter);

export default app;
