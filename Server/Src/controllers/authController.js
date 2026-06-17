import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";
import sessionModel from "../models/sessionModel.js";
import crypto from "crypto";


/**
 * @name registerUserController
 * @route POST /api/auth/register
 * @description register a new user by their username, email,phone and password
 * @access Public
 */
export const registerUserController = async (req, res) => {
  try {
    const { name, email,phone, password } = req.body;
    //1. check empty
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All Fields Are Required",
      });
    }

    //2.Check users in database
    const userExisted = await User.findOne({
      email,
    });
    if (userExisted) {
      return res.status(400).json({
        message: "User Already Register with this Email Id",
      });
    }

    //3.hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //4.create a new user
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    //5. Generate refresh token
    const refreshToken = generateRefreshToken(user._id);

    //6.hash the refresh token before storing in database for security
    const hashedRefreshToken = crypto.createHash("sha256").update(refreshToken).digest("hex");
    //7.generate session
    const session = await sessionModel.create({
      user: user._id,
      refreshToken: hashedRefreshToken,
      ip:req.ip,
      userAgent:req.headers["user-agent"],
    })

    //8. Generate access token
    const accessToken = generateAccessToken(user._id);

    //9.store token in cookies
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    //10. send response with user
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user: {
        _id: user._id,
        username: user.name,
        email: email,
      },
      accessToken, // send to frontend
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

/**
 * @name loginUserController
 * @route POST /api/auth/login
 * @description login a user by their email, and password
 * @access Public
 */
export const loginUserController = async (req, res) => {
  try {

    //  /* ================= GOOGLE LOGIN ================= */

    // const { code } = req.query;
    // if (code) {
    //   // Handle Google authentication logic here
    //   return res.status(200).json({
    //     message: "Google Authentication Successful",
    //     code,
    //   });
    // }
     
    // const googleResponse = await oauth2client.getToken(code);
    // oauth2client.setCredentials(googleResponse.tokens);

    // const userResponse = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`)

    // const { email, name , picture } = userResponse.data; 
    // // Check if user already exists in the database
    // let user = await UserModel.findOne({ email });

    // if (!user) {  
    //   // If user doesn't exist, create a new user
    //   user = await UserModel.create({
    //     username: name,
    //     email,  
    //     password: null, // No password for Google-authenticated users
    //     profilePicture: picture, // Store profile picture URL
    //   });
    // }

    // // Generate refresh token
    // const refreshToken = generateRefreshToken(user._id);  
    // // Hash the refresh token before storing in database for security
    // const hashedRefreshToken = crypto.createHash("sha256").update(refreshToken).digest("hex");
    // // Generate session 
    // const session = await sessionModel.create({
    //   user: user._id,
    //   refreshToken: hashedRefreshToken,
    //   ip:req.ip,
    //   userAgent:req.headers["user-agent"],
    // })
    // // Generate access token
    // const accessToken = generateAccessToken(user._id);

    // // Store token in cookies
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    // });

    // // Send response with user and access token
    // return res.status(200).json({
    //   success: true,  
    //   message: "Google Authentication Successful",
    //   user: {
    //     _id: user._id,
    //     username: user.username,  
    //     email: email,
    //     profilePicture: user.profilePicture, // Include profile picture in response
    //   },
    //   accessToken, // Send to frontend
    // });

     /* ================= NORMAL LOGIN ================= */

    //1. get email and password from request body
    const { email, password } = req.body;

    //2. check empty
    if (!email || !password) {
      return res.status(400).json({
        message: "All Fields Are Required",
      });
    }

    //3.check user in database
    const user = await User.findOne({ email });

    //4. if user not found
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    //5. compare password
    const isMatched = await bcrypt.compare(password, user.password);

    //6. if password not matched
    if (!isMatched) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    //7. genetrate refresh token
    const refreshToken = generateRefreshToken(user._id);

    //8.hash the refresh token before storing in database for security
    const hashedRefreshToken = await crypto.createHash("sha256").update(refreshToken).digest("hex");

    //9. generate session
    const session = await sessionModel.create({
      user: user._id,
      refreshToken: hashedRefreshToken,
      ip:req.ip,
      userAgent:req.headers["user-agent"],
    })

    //10. generate access token
    const accessToken = generateAccessToken(user._id);
  

    //11. store token in cookies
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

   // 12 send response with user and access token
    res.status(201).json({
      success: true,
      message: "User LoggedIn Successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: email,
      },
      accessToken, // send to frontend
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

/**
 * @name getMeController
 * @route GET /api/auth/get-me
 * @description fetch the user details
 * @access Private
 */

export const getMeController = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User details fetched successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

/**
 * @name refreshTokenController
 * @route GET /api/auth/refresh-token
 * @description
 */

export const refreshTokenController = async (req, res) => {
  try {
    //1. get refresh token from cookie
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "No Refresh Token Provided",
      });
    }

    //2. verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

    //3. hsh the refresh token before comparing with database token for security
    const hashedRefreshToken = await crypto.createHash("sha256").update(refreshToken).digest("hex");

    //4. find the session in database
    const session = await sessionModel.findOne({
      refreshToken: hashedRefreshToken,
      revoked: false,
    });

    //5. if no session found
    if (!session) {
      return res.status(401).json({
        message: "Invalid Refresh Token",
      });
     }

    //6. generate token
    const accessToken = generateAccessToken(decoded.id);
    const newRefreshToken = generateRefreshToken(decoded.id);

    //7. hash the new refresh token before storing in database for security
    const hashedNewRefreshToken = crypto.createHash("sha256").update(newRefreshToken).digest("hex");

    //8. update session in database with new refresh token
    session.refreshToken = hashedNewRefreshToken;
    await session.save();

    //9. store token in cookies
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    //10. send response with
    res.status(200).json({
      success: true,
      message: "Access Token Refreshed Successfully",
      accessToken, // send to frontend
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      message: "Invalid or Expired Refresh Token",
    });
  }
};

/**
 * @name logOutUserController
 * @route GET /api/auth/logout
 * @description logout user
 * @access Public
 */
export const logOutUserController = async (req, res) => {
  try {
    //1. get refresh token from cookie
    const refreshToken = req.cookies.refreshToken;

    //2. if no token in cookie
    if (!refreshToken) {
      return res.status(400).json({
        message: "No Refresh Token Provided",
      });
    }

    //3 hash the refresh token before comparing with database token for security
    const hashedRefreshToken = await crypto.createHash("sha256").update(refreshToken).digest("hex");

    //4 find the session in database
    const session = await sessionModel.findOne({
      refreshToken: hashedRefreshToken,
      revoked: false,
    });

      //5. if no session found
    if (!session) {
      return res.status(400).json({
        message: "Invalid Refresh Token",
      });
    }

    //6. revoke the session
    session.revoked = true;
    await session.save();
    
    //7. clear cookies
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    res.status(200).json({
      message: "User Logged Out Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

/** * @name logOutAllUserController
 * @route GET /api/auth/logout-all
 * @description logout user from all devices by revoking all refresh tokens   
 * @access Public
 */

export const logOutAllUserController = async (req, res) => {
  try {
   //1. get refresh token from cookie
    const refreshToken = req.cookies.refreshToken;

    //2. if no token in cookie
    if (!refreshToken) {
      return res.status(400).json({
        message: "No Refresh Token Provided",
      });
    }
    //3. verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

    //4. revoke all sessions for the user
   await sessionModel.updateMany({
      user: decoded.id,
      revoked: false,
      }, {  revoked: true 
   })
    
   //5. clear cookies
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: true, 
    });
    //6. send response
    res.status(200).json({
      message: "User Logged Out from All Devices Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
}