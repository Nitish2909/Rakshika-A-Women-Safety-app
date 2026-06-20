import express from "express"
const router = express.Router();
import { triggerSOS } from "../controllers/emergencyController.js";

// Mounts handler logic functions to clean endpoints
router.post("/sos", triggerSOS);

export default router;