import Contact from "../models/Contact.js";

/**
 * @name addContactController
 * @route POST /
 * @description Add new emergency contact
 * @access Private
 */
export const addContactController = async (req, res) => {
  try {
    const contact = await Contact.create({
      userId: req.user.id,
      ...req.body,
    });

    return res.status(201).json({
      success: true,
      message: "Contact created successfully",
      contact,
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
    const contacts = await Contact.find({
      userId: req.user.id,
    });

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
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      contact,
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