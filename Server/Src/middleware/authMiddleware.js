import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {

    //1.) get token from cookies
    const token =
      req.cookies?.accessToken ||
      (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ") &&
        req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    //2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //3.) attach user to request
    req.user = decoded;
    next();
    
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({
      message: "Invalid or Expired Token",
    });
  }
};
