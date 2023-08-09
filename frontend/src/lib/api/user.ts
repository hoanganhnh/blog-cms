import { User } from "@/types/user.type";

import axiosClient from "./axiosClient";
import handleError from "./handle-error";

const UserAPI = {
  current: async () => {
    const user: any = window.localStorage.getItem("user");
    const token = user?.token;
    try {
      const response = await axiosClient.get(`/user`, {
        headers: {
          Authorization: `Token ${encodeURIComponent(token)}`,
        },
      });
      return response;
    } catch (error) {
      return handleError(error);
    }
  },
  login: async (email: string, password: string) => {
    try {
      const response = await axiosClient.post(
        `/users/login`,
        JSON.stringify({ user: { email, password } })
      );
      return response;
    } catch (error) {
      return handleError(error);
    }
  },
  register: async (username: string, email: string, password: string) => {
    try {
      const response = await axiosClient.post(
        "/users",
        JSON.stringify({ user: { username, email, password } })
      );
      return response;
    } catch (error) {
      return handleError(error);
    }
  },
  save: async (user: Partial<User>) => {
    try {
      const response = await axiosClient.put(`/user`, JSON.stringify({ user }));
      return response;
    } catch (error) {
      return handleError(error);
    }
  },
  follow: async (username: string) => {
    const user: any = JSON.parse(window.localStorage.getItem("user") || "");
    const token = user?.token;
    try {
      const response = await axiosClient.post(
        `/profiles/${username}/follow`,
        {},
        {
          headers: {
            Authorization: `Token ${encodeURIComponent(token)}`,
          },
        }
      );
      return response;
    } catch (error) {
      return handleError(error);
    }
  },
  unfollow: async (username: string) => {
    const user: any = JSON.parse(window.localStorage.getItem("user") || "");
    const token = user?.token;
    try {
      const response = await axiosClient.delete(
        `/profiles/${username}/follow`,
        {
          headers: {
            Authorization: `Token ${encodeURIComponent(token)}`,
          },
        }
      );
      return response;
    } catch (error) {
      return handleError(error);
    }
  },
  get: async (username: string) => {
    try {
      const user: any = JSON.parse(window.localStorage.getItem("user") || "");
      const token = user?.token;

      const response = await axiosClient.get(`/profiles/${username}`, {
        headers: {
          Authorization: `Token ${encodeURIComponent(token)}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return handleError(error);
    }
  },
  getProfile: async (username: string) =>
    axiosClient.get(`/profiles/${username}`),
};

export default UserAPI;
