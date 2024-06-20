import { verifyToken } from "../utils/token.js";

export const vaildateMiddleWare=async(req,res,next)=>{
    try{
        const headers = req.headers['authorization'];

        if(!headers  || !headers.startsWith("Bearer ")){
            throw new ApiError(404,"Please Login first")
        }

        const auth_token = headers.split(" ")[1]

        if(!auth_token){
            throw new ApiError(httpStatus.UNAUTHORIZED,"Please Provide valid")
        }

        const data =verifyToken(auth_token)
        req.user =data.userid
        next()

} catch (error) {
        next(error)
}
}