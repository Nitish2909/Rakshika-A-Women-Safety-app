import axiosInstance from "./contactApi";

export const createContactApi = async (contactData) => {
  try {
    // Sends POST /api/contacts with the form data payload
    const response = await axiosInstance.post('/contacts', contactData, {
      withCredentials: true
    });
    return response.data; // Returns the saved contact document from MongoDB
  } catch (error) {
    // Throw error to be caught by the React component
    throw error.response?.data?.message || "Something went wrong";
  }
};

// READ
export const getAllContactsApi = async () => {
  try {
    const response = await axiosInstance.get('/contacts', { withCredentials: true }); // Added here
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong";
  }
};