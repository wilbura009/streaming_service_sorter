import axios from "axios";


export default axios.create({
    //URL of the backend server
    baseURL: "http://localhost:5001/api/v1/home",
    headers: {
        "Content-Type": "application/json",
    }
});