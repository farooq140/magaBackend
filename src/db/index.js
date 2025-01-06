import mongoose from "mongoose";
import DB_Name from "../constants.js"
const connectDB=async()=>{
     try{
         const connectionInstant= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
         console.log(`MongoDB connection success ${connectionInstant.connection.host}`) 
     }catch(err){
         console.log(`MongoDB connection err! ${err}`)
         process.exit(1)
         throw err
     }
}
export default connectDB