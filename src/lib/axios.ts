import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

export const useApi = () => {
  
const { getToken } = useAuth();
  const api = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
     
  });

  api.interceptors.request.use(async (config) => {
    
    const token = await getToken();
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
};



