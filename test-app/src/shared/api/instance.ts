import axios from "axios";

export const instance = axios.create({
  baseURL: `https://api.github.com/search/`,
  timeout: 1000,
  headers: {
    Authorization: "Bearer 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"
  }
});
