import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

function getAllRestrictions() {
    return http.get('/restrictions')
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
};

function updateRestriction(obj) {
    return http.put(`/restrictions/${obj._id}/update`, obj)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
};

function deleteRestriction(id) {
    return http.delete(`/restrictions/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
};

function addRestriction(newObj) {
    return http.post('/restrictions', newObj)
        .then(res => res.data)
        .catch(err => {
            throw err;
    });
}

export { getAllRestrictions, updateRestriction, addRestriction, deleteRestriction }