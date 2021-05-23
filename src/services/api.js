import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import { SERVER_URL, SERVER_API_KEY } from "../constants/server";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  adapter: cache.adapter,
  baseURL: SERVER_URL,
  headers: {
    "X-API-Key": `${SERVER_API_KEY}`,
  },
});

export default api;
