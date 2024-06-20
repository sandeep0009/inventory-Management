import jwt from "jsonwebtoken";
export const generateToken=(user, expire="1d")=>{
    const token=jwt.sign({userid:user._id},process.env.JWT_SECRET,{ expiresIn:expire})
    return token
    
}


export const verifyToken=(token)=>{
    const tokens=jwt.verify(token,process.env.JWT_SECRET);
    return tokens;
}