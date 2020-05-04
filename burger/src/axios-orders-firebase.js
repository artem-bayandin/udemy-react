import axios from 'axios'

const axiosOrdersFirebaseInstance = axios.create({
    baseURL: 'https://udemy-react-burger-3e07b.firebaseio.com/'
})

export default axiosOrdersFirebaseInstance