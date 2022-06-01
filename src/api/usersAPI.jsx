import axios from "axios";

const usersAPI = axios.create({
  baseURL: "https://628e3408368687f3e712634b.mockapi.io/users/",
});

export default usersAPI;
