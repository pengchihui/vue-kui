import axios from 'axios'

axios.defaults.baseURL = 'https:'
axios.defaults.headers.common['Authorization'] = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default axios
