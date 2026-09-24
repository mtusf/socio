import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

//rotes declaration
app.use("/api/v1/user", userRouter);

// Glbal middleware
app.use((error, req, res, next) => {

    console.log(error.status || 500, error.message || "something went wrong")
    return res.status(error.status).json({
        message: error.message
    })
})

export default app;