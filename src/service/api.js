import axios from "axios"

const URL = "http://localhost:4000/api/v1"

export const authenticateSignup = async(data) => {
    try {
       return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log("Error while calling signup api" , error);
    }
}

export const authenticateLogin = async(data) => {
    try {
       return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("Error while calling signup api" , error);
        return error.response
    }
}

export const payWithPaytm = async(data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data)
        return response.data
    } catch (error) {
        console.log("Error while calling error api")
    }
}