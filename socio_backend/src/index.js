import dotenv from "dotenv";
import connectDb from "./db/index.js";
import app from "./app.js";
dotenv.config({
    path: './env'
});
connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at Port: ${process.env.PORT}`);
    });
    app.on("error", (error)=>{`error during establishing server: ${error}`})
})
.catch((error)=>{
    console.log(`MongoDb connection failed!!`,error);
});
