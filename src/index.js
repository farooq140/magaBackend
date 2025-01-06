import 'dotenv/config'
import connectDB from "./db/index.js"
import app from "./app.js";

connectDB()
.then(()=>{
     app.listen(process.env.PORT||8000,()=>{
          console.log(`⚙️ Server is running at port!! : ${process.env.PORT?process.env.PORT:8000}`);
     })
})
.catch((err)=>{
     app.on("error",(err)=>{console.log("error",err)})
     console.log(`Mongo db connect failed ${err}`)
     throw err
})
   
