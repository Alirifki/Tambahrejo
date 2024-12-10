import axios from "axios";

const Api = axios.create({

    baseURL: "https://dummyjson.com/posts"
})

export default Api;