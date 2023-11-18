import axios from "axios";

const BASE_URL = "Your_API_Endpoint";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    // Handle error appropriatelyd
  }
};

// Add more API functions as needed
