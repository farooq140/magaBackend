import mongoose from "mongoose";
import  DB_NAME  from "../constants.js";
const connectDb=async()=>{
     try{
          const connectionInstace=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
          console.log(`\n MongoDB connected !! DB HOST: ${connectionInstace.connection.host}`);
     }catch(err){
         console.log("Mongoose db connection failed",err)
     }
}
export default connectDb;


