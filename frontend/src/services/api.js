import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const createMessage = (message) => {
  return API.post("/messages", {
    message,
  });
};

export const getMessages = () => {
  return API.get("/messages");
};
