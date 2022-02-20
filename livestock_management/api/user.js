import axios from 'axios'
import { useSelector } from 'react-redux'

const url = "http://10.0.2.2:5000/"

const config = {
    headers:{
        "Content-Type":"application/json"
    }
}
// const config1 = {
//     headers:{
//         "Content-Type":"application/json",
//         Authorization:`Bearer ${localStorage.getItem("authToken")}`
//     }
// }

export const getUser = (token) => {
    const config1 = {
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    }
    
    return axios.get(url,config1)
}

export const postUser = (user) => {
    return axios.post(url,user,config)
}

export const loginUser = (user) => {
    return axios.post(`${url}login`,user,config)
}
