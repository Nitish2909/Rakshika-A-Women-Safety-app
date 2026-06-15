import express from "express";
import { getMeController, loginUserController, logOutAllUserController, logOutUserController, refreshTokenController, registerUserController } from "../controllers/authController.js";
import { auth } from "../middleware/authMiddleware.js";
const router = express();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public   
 */
router.post("/register", registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login user and generate access and refresh tokens
 * @access Public   
 */
router.post("/login", loginUserController);

/**
 * @route GET /api/auth/get-me
 * @description Fetch user details
 * @access Private   
 */
router.get("/get-me", auth, getMeController)

/**
 * @route GET /api/auth/refresh-token
 * @description Refresh access token using refresh token
 * @access Public   
 */
router.get("/refresh-token", refreshTokenController)


/**
 * @route GET /api/auth/logout
 * @description Logout user
 * @access Public   
 */
router.get("/logout", logOutUserController);

/**
 * @route GET /api/auth/logout-all
 * @description Logout user from all devices by revoking all refresh tokens
 * @access Public   
 */
router.get("/logout-all", logOutAllUserController)


export default router;
