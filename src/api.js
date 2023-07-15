import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-daftools.netlify.app/.netlify/functions',
})

export default api;