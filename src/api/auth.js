import axios from "axios";
import { BASE_URL } from "./config";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login/`, {
      email,
      password,
    });

    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      return { success: true, message: "Login successful!" };
    }
  } catch (error) {
    return { success: false, message: error.response?.data?.message || "Login failed" };
  }
};
