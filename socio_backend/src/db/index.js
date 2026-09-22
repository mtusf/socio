import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb = async () => {
    try {
        const checkConnection = await mongoose.connect(process.env.MONGO_URI,{
            dbName:DB_NAME
        })
        console.log(`\nMongodb connected! Db Host: ${checkConnection.connection.host}`)
    } catch (error) {
        console.error("Error during connecting db", error);
        process.exit(1);
    }
}
export default connectDb