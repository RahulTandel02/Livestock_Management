import axios from 'axios'

const url = "http://10.0.2.2:5000/user"

const config = {
    headers:{
        "Content-Type":"application/json"
    }
}

export const getLivestockapi = (id) => {
    return axios.get(`${url}/${id}`)
}

export const postLivestockapi = (data) => {
    return axios.post(url,data)
}