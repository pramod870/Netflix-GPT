// import axios from axios;
// import { API_BASE_URL } from "./config";

// const axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true, // Ensures cookies (refresh token) p0

// });

// // Add request Interceptor

// axiosInstance.interceptors.request.use(
//     async (config) => {
//         const accessToken = localStorage.getItem("AccessToken");

//         if (accessToken) {
//             config.headers["Authorization"] = `Bearer ${accessToken}`;
//         }

//         return config;
//     },

//     (error) => Promise.reject(error)
    
// );


// // Add response interceptor to handle token expiration
// axiosInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;
//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             try {
//                 const refreshResponse = await axios.post(`${API_BASE_URL}/auth/token/refresh/`, {}, { withCredentials: true });
//                 localStorage.setItem("accessToken", refreshResponse.data.access);
//                 axiosInstance.defaults.headers["Authorization"] = `Bearer ${refreshResponse.data.access}`;
//                 return axiosInstance(originalRequest); // Retry original request
//             } catch (refreshError) {
//                 console.error("Refresh token failed", refreshError);
//                 localStorage.removeItem("accessToken");
//                 window.location.href = "/login"; // Redirect to login
//                 return Promise.reject(refreshError);
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// export default axiosInstance;