//import axios from "axios";
import dummyData from "./dummyData.json";

//const BASE_URL = "http://localhost:8000";
/*
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    if (error.response) {
      let errorMessage = "Failed to fetch users, Data problem: ";
      switch (error.response.status) {
        case 400:
          errorMessage += "Bad Request";
          break;
        case 401:
          errorMessage += "Unauthorized";
          break;
        case 403:
          errorMessage += "Forbidden";
          break;
        case 404:
          errorMessage += "Not Found";
          break;
        case 500:
          errorMessage = "Internal Server Error";
          break;
        default:
          errorMessage = "Unknown Error";
      }
      console.error("Error status", error.response.status);
      console.error("Error data", error.response.data);
      return { error: errorMessage };
    } else if (error.request) {
      console.error("No response received", error.request);
      return { error: "No response from server" };
    } else {
      console.error("Error", error.message);
      return { error: "Request setup failed" };
    }
  }
};*/

export const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 1000);
  });
};
