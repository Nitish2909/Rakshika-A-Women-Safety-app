
import Incident from "../models/Incidents.js";
import twilio from "twilio";

// Static mockup method representing a database lookup for a user's trusted contacts
const getEmergencyContacts = async (userId) => {
  return [
    { name: "Mom", phone: "+919876543210" },
    { name: "Dad", phone: "+919876543211" },
  ];
};

/**
 * @desc    Trigger a critical SOS Emergency Alert Pipeline
 * @route   POST /api/emergency/sos
 * @access  Public (Secure with JWT later)
 */
export const triggerSOS = async (req, res) => {
  const { userId, userName, lat, lng } = req.body;

  // Validation Check
  if (!lat || !lng) {
    return res.status(400).json({ 
      success: false, 
      error: "Missing active GPS coordinate telemetry metrics." 
    });
  }

  try {
    // 1. Create and save incident report inside MongoDB via our Model
    const incident = await Incident.create({
      userId,
      userName,
      coordinates: { lat, lng },
    });

    // 2. Fetch target user's custom rescue contact circle
    const contacts = await getEmergencyContacts(userId);

    // 3. Authenticate with the Twilio SMS Gateway Client
    const twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    // Generate explicit tracking layout link to point directly to Google Maps
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

    // 4. Map through and fire off text messages concurrently using Promise.all
    const smsPromises = contacts.map((contact) => {
      return twilioClient.messages.create({
        body: `CRITICAL ALERT: ${userName} has pressed their Rakshika SOS button! Live Location Tracking Link: ${googleMapsUrl}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: contact.phone,
      });
    });

    await Promise.all(smsPromises);

    // Success response
    return res.status(200).json({
      success: true,
      message: "SOS pipelines successfully executed. Notification texts broadcasted.",
      incidentId: incident._id,
    });

  } catch (error) {
    console.error("SOS controller crash log:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Internal Emergency System failure handling payload." 
    });
  }
};