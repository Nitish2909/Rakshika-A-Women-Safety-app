import Contact from "../models/Contact.js";

/**
 * @name addContactController
 * @route POST /
 * @description Add new emergency contact
 * @access Private
 */
export const addContactController = async (req, res) => {
  try {

    //1. Destructure and validate incoming contact details from request body
    const { name, phone, relation } = req.body;

    //2. Basic validation checks for required fields
    if (!name || !phone || !relation) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, phone, relation) are required.",
      });
    }
    //3. Create and save new contact document in MongoDB using Mongoose model
    const newContact = await Contact.create({
      name, phone, relation
    });
    return res.status(201).json({
      success: true,
      message: "Contact created successfully",
      newContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @name getContactController
 * @route GET /
 * @description Get all contacts of logged-in user
 * @access Private
 */
export const getContactController = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Contacts fetched successfully",
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @name updateContactController
 * @route PUT /:id
 * @description Update contact
 * @access Private
 */
export const updateContactController = async (req, res) => {
  try {

    const { name, phone, relation } = req.body;

    // find contact first to check if it exists
    const existingContact = await Contact.findById(req.params.id);
    if (!existingContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    // Update fields 
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      contact: updatedContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @name deleteContactController
 * @route DELETE /:id
 * @description Delete contact
 * @access Private
 */
export const deleteContactController = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(
      req.params.id
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};