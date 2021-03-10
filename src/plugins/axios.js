import axios from 'axios'

const HttpHelper = axios.create({
    timeout: 50000
})

HttpHelper.interceptors.request.use(config => config)

HttpHelper.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data
    }
    return response
}, error => error)

export default HttpHelper
