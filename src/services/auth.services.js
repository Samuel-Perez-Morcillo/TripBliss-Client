import axios from 'axios'

class AuthService {
    constructor(){
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })
    }

    signupUser(userData){
        return this.axiosApp.post('/signup', userData)
    }

    loginUser(userData){
        return this.axiosApp.post('/login', userData)
    }

    verifyUser(userData){
        return this.axiosApp.get('/verify', {headers: {Authorization: `Bearer${token}`}})
    }
}

const authServices = new AuthService()

export default authServices