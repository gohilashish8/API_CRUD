import axios from "axios";

// export const baseUrl = "http://localhost:3000";
export default axios.create({
  baseURL: "http://localhost:3000",
});
