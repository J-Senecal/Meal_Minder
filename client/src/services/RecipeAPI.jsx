import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

function getRecipeById(idMeal) {
    return http.get(`/recipe/${idMeal}/details`)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

function getAllRecipesInDB() {
    return http.get('/recipe')
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
};
function createRecipe(newObj) {
    return http.post('/recipe', newObj)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            throw err;
    });
}

function updateRecipe(obj) {
    return http.put(`/recipe/${obj._id}/update`, obj)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
};

function deleteRecipe(id) {
    return http.delete(`/recipe/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
};

export { getRecipeById, getAllRecipesInDB, createRecipe, updateRecipe, deleteRecipe}