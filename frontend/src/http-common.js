import axios from "axios";


export default axios.create({
    //URL of the backend server
    baseURL: "https://us-east-1.aws.data.mongodb-api.com/app/streamez-sydux/endpoint/",
    headers: {
        "Content-Type": "application/json",
    }
});