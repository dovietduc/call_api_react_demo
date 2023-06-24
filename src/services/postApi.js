import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

function postCreate() {

}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    postCreate: postCreate
}