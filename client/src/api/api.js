import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:7861", // backend FastAPI URL
});

export const askQuestion = async (question) => {
  const response = await API.post("/ask", { question });
  return response.data.answer;
};
