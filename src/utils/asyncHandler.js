const asyncHandler=(fn)=>async (req,res,next)=>{
    try{
        await fn(req,res,next);
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server Error'});
    }
}

export default asyncHandler;