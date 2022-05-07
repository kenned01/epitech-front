import axios from "axios"

export const VerifyToken = () => {

    let token = localStorage.getItem('token')

    if(token == null) {
        return false
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return true
}