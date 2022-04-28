import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.88.203:4030/api/admin/customer",
  headers: {
    "Content-type": "application/json"
  }
});