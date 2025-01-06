// const ayncHandler =(fu)=>async(req,res,next)=>{
//      try{
//           await fu(req,res,next);
//      }catch(error){
//          res.status(error.code||500).json({
//           sucess:false,
//           message:error.message||"An unknown error occured"});
//      }
// }
const ayncHandler=(requstHandler)=>{
     (req,res,next)=>{
          Promise.resolve(requstHandler(req,res,next)).catch((error)=>{next(error)})
     }
}

export default ayncHandler;