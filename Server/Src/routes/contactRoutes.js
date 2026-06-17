import express from "express";
import { addContactController, deleteContactController, getContactController, updateContactController} from "../controllers/contactController.js";
import { auth } from "../middleware/authMiddleware.js";
const router = express.Router()

/**
 * @route POST /api/contacts/
 * @description Add new Contact
 * @access Public   
 */
router.post("/", auth, addContactController);

router.get("/", getContactController);

router.put("/:id", updateContactController);

router.delete("/:id", deleteContactController);

export default router;