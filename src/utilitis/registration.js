
import axios from 'axios'


export const handleRegister = (data) => {
    axios.post('http://localhost:8000/carhouse/user/registration', data)
        .then(res => {
            if (res.data.message) {
                return true
            }
        })
}



export const handleLogin = (data) => {
    axios.post('http://localhost:8000/carhouse/user/login', data)
        .then(res => {
            if (res.data.message) {
                return true
            }
        })
}