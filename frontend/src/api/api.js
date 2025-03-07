
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getVehicleTypes = async (wheels) => {
  const response = await axios.get(`${API_URL}/vehicles/types`, {
    params: { wheels },  // Safer way to pass query parameters
  });
  return response.data;
};
export const getVehiclesByType = async (type) => {
  try {
    const response = await axios.get(`${API_URL}/vehicles/${type}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles", error);
    return [];
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Booking failed");
  }
};
