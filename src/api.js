import axios from 'axios'

const api = axios.create({
    baseURL: 'https://daf-express-api.netlify.app/.netlify/functions',
})

export default api;