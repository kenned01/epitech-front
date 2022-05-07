import { message } from "antd"
import axios from "axios"
import { TransformData } from "./TransformProvider"

export const getBooks = (setData) => {

    axios.get('admin/book/all')
    .then(({data}) => {
        if(data.status === 200) {
            setData(data.data)
        }else {
            message.error('error')
        }
    })
    .catch(console.warn)

}

export const deleteBook = (id, setData) => {
    axios.delete(`admin/book/${id}/delete`)
    .then(({data}) => {
        if(data.status === 200) {

            setData((_old = []) => {
                return _old.filter(elm => elm.id !== id)
            })
            
        }else {
            message.error('error')
        }
    })
    .catch(console.warn)
}

export const addBook = (data, setData) => {
    axios.post('admin/book/create', data)
    .then(({data}) => {
        if(data.status === 200) {

            setData((_old = []) => {
                return [..._old, data.data]
            })
            
        }else {
            message.error('error')
        }
    })
    .catch(console.warn)
}

export const editbook = (id, data, setData) => {
    
    axios.put(`admin/book/${id}/update`, TransformData(data))
    .then(res => {
        if(res.status === 200) {

            setData((_old = []) => {

                let _prev = _old.filter(elm => elm.id !== id)


                return [
                    ..._prev,
                    {...data, id}
                ]

            })
            
        }else {
            message.error('error')
        }
    })
    .catch(console.warn)
}