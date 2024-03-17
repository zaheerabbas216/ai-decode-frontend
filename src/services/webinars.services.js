import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:1337";

const GET_ALL_IMAGES_QUERY = "populate=*";

const endpoints = {
  get_all_webinars: `${BASE_URL}/api/webinars?${GET_ALL_IMAGES_QUERY}`,
};

const api_service = {
  getAllWebinars: async () => {
    try {
      const response = await axios.get(endpoints.get_all_webinars);
      return response;
    } catch (error) {
      console.log("error getting all the webinars", error);
      throw error;
    }
  },
};

export default api_service;
