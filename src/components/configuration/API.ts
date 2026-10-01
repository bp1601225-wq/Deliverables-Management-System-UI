import axios from "axios";
import { toast } from "sonner";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


// Request interceptor
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Response interceptor
API.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {

    if (error.response?.status === 401) {
      localStorage.removeItem("token");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);



export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {


    console.error("Axios Error:", error.response?.data);

    const errorData = error.response?.data;

    toast.error(
      errorData?.message ||
      errorData?.error ||
      errorData?.res ||
      "Something went wrong."
    );

    return errorData;
  }

  console.error("Unexpected Error:", error);

  toast.error(
    error instanceof Error
      ? error.message
      : "An unexpected error occurred."
  );

  return null;
};

export default API;