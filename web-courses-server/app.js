import express from "express";
import dotenv from "dotenv";
import ErrorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({
  path: "./config/config.env",
});

const app = express();

//Using middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Importing all routes and using
import course from "./routes/CourseRoutes.js";
import user from "./routes/UserRoutes.js";
import payment from "./routes/paymentRoute.js";
import other from "./routes/OtherRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);

app.get("/", (req, res) =>
  res.send(
    `<h1>Server is working. click <a href=${process.env.FRONTEND_URL} >here</a> to visit Frontend</h1>`
  )
);

export default app;

app.use(ErrorMiddleware);
