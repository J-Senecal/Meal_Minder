import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

function getAllRestrictionsByUser(id) {
    return http.get(`/user/${id}`)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
};

function getUserById(id) {
    return http.get(`/user/${id}`)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
};

export { getAllRestrictionsByUser, getUserById }