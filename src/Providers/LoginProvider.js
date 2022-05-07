import axios from "axios"
import { message } from "antd";

export const makeLogin = (data, callback) => {

    axios.post("admin/login", data)
    .then(({data}) => {
        if(data.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.data}`;
            localStorage.setItem('token', data.data)
            callback()
        }else {
            message.error('Error')
        }
    })
    .catch((e) => {
        console.warn(e)
        message.error('Error')
    })
    
}