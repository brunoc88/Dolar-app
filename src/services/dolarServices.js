import axios from 'axios'
const url = 'https://dolarapi.com/v1/dolares'

const getAll = () => axios.get(url).then(response => response.data);

export { getAll }