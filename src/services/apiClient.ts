import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "28d09f809abf4eee947c5c48af2e0201",
  }
});
