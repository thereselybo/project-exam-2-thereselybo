import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from "../constants/api";

const useAxios = () => {
  const [auth] = useContext(AuthContext);

  const apiClient = axios.create({
    baseURL: BASE_URL,
  });

  apiClient.interceptors.request.use((config) => {
    const token = auth.jwt;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return apiClient;
};

export default useAxios;
