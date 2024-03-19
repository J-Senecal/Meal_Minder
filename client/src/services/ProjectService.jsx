
//=====================================================================================
//This file was pre-separation of concerns and is kept as a back up only for functions
//=====================================================================================




// import axios from 'axios'

// const http = axios.create({
//     baseURL: 'http://localhost:8000/api',
// });

// //==============================================================
// //Restriction functions

// //for specific user
// function getAllRestrictionsByUser(id) {
//     return http.get(`/user/${id}`)
//         .then(response => response.data)
//         .catch(err => {
//             throw err;
//         });
// };
// //for entire restrictions table
// function getAllRestrictions() {
//     return http.get('/restrictions')
//         .then(response => response.data)
//         .catch(err => {
//             throw err;
//         });
// };

// function updateRestriction(obj) {
//     return http.put(`/restrictions/${obj._id}/update`, obj)
//         .then(res => res.data)
//         .catch(err => {
//             throw err;
//         });
// };

// function deleteRestriction(id) {
//     return http.delete(`/restrictions/${id}`)
//         .then(res => res.data)
//         .catch(err => {
//             throw err;
//         })
// };

// function addRestriction(newObj) {
//     return http.post('/restrictions', newObj)
//         .then(res => res.data)
//         .catch(err => {
//             throw err;
//     });
// }
// //=============================================================

// //=============================================================
// //Recipe Functions

// function getRecipeById(idMeal) {
//     return http.get(`/recipe/${idMeal}/details`)
//         .then(response => response.data)
//         .catch(err => {
//             throw err;
//         });
// }

// function getAllRecipesInDB() {
//     return http.get('/recipe')
//         .then(response => response.data)
//         .catch(err => {
//             throw err;
//         });
// };
// function createRecipe(newObj) {
//     return http.post('/recipe', newObj)
//         .then(res => res.data)
//         .catch(err => {
//             throw err;
//     });
// }

// function updateRecipe(obj) {
//     return http.put(`/recipe/${obj._id}/update`, obj)
//         .then(res => res.data)
//         .catch(err => {
//             throw err;
//         });
// };

// function deleteRecipe(id) {
//     return http.delete(`/recipe/${id}`)
//         .then(res => res.data)
//         .catch(err => {
//             throw err;
//         })
// };
// //=============================================================

// //=============================================================
// //User Functions

// function getUserById(id) {
//     return http.get(`/user/${id}`)
//         .then(response => response.data)
//         .catch(err => {
//             throw err;
//         });
// };


// export {
//     getAllRestrictions,
//     getAllRestrictionsByUser,
//     updateRestriction,
//     deleteRestriction,
//     addRestriction,
//     getRecipeById,
//     getAllRecipesInDB,
//     getUserById,
//     createRecipe,
//     deleteRecipe,
//     updateRecipe
// }