import axios from "axios";

export const login = async (user) => {
    return await axios.post("http://localhost:4000/api/login", user)
};
