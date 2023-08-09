import axios from "axios";

export const getToken = () => {
  const user =
    typeof window !== "undefined" && window.localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : null;

  return user !== null ? user.token : "";
};

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: getAuthorizationHeader(),
  },
});

export default axiosClient;
