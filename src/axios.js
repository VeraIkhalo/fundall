import axios from 'axios'

axios.defaults.baseURL ="https://campaign.fundall.io";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');