//=====================================================================================
//This file was pre-separation of concerns and is kept as a back up only for functions
//=====================================================================================


// import User from '../models/user.model.js'; // import the model name from the model file
// import Recipe from '../models/recipe.model.js';
// import Restriction from '../models/restrictions.model.js';

// // simulated token 
// let myToken = {firstName:"Justin", _id:"65f658c03cd946af0e3403cb"}

// //--------------------------Restrictions---------------------------------//
// async function addRestriction( req, res) {
//     try {
//         const createReq = await Restriction.create(req.body).then( (r)=> User.findByIdAndUpdate({_id:myToken._id}, {$push: { restrictions: {_id:r._id}}} ))
//         console.log(createReq);
//         res.json(createReq)
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }
// //first try

// // async function addRestrictionToUser( req, res) {
// //     try {
// //         const updateUser= await User.findByIdAndUpdate({_id:myToken._id}, {$push: { restrictions: {_id:"65f3bca3057f48b5613c35d8"}}} )
// //         res.json(updateUser)
// //     } catch (error) {
// //         console.log(error);
// //         res.status(400).json(error);
// //     }
// // }
// //working for just adding to restrictions table, no user
// // async function addRestriction( req, res) {
// //     try {
// //         const createReq = await Restriction.create(req.body)
// //         res.json(createReq)
// //     } catch (error) {
// //         console.log(error);
// //         res.status(400).json(error);
// //     }
// // }

// async function getAllRestrictions(req, res) {
//     try {
//         const getReq = await Restriction.find();
//         res.json(getReq);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }

// async function updateRestriction(req, res){
//     const option = {
//         new: true,
//         runValidators: true
//     }
//     try {
//         const updated = await Restriction.findByIdAndUpdate(req.params.id, req.body, option)
//         res.json( updated )
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }

// async function deleteRestriction(req, res) {
//     try {
//         const deleted = await Restriction.findByIdAndDelete(req.params.id)
//         res.json( deleted )
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }
// //-----------------------------------------------------------------------//


// //-----------------------------Recipes-----------------------------------//
// async function getOneById( req, res) {
//     try {
//         const foundOne = await Recipe.find( {"idMeal" : req.params.idMeal})
//         if (foundOne.length<1) {
//             res.status(400).json({errors:'it was empty'})
//         } else {
//             res.json(foundOne[0])
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }
// // async function getOneById( req, res) {
// //     try {
// //         const foundOne = await Recipe.findById( req.params.idMeal )
// //         res.json(foundOne)
// //     } catch (error) {
// //         console.log(error);
// //         res.status(400).json(error);
// //     }
// // }

// async function createRecipe( req, res) {
//     try {
//         const createReq = await Recipe.create(req.body)
//         res.json(createReq)
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }


// async function getAllRecipesInDB(req, res) {
//     try {
//         const getReq = await Recipe.find();
//         res.json(getReq);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }

// async function deleteRecipe(req, res) {
//     try {
//         const deleted = await Recipe.findByIdAndDelete(req.params.id)
//         res.json( deleted )
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }
// //-----------------------------------------------------------------------//


// //-----------------------------User-----------------------------------//

// //get the user with the restrictions
// //restriction?.name  if you can't get value you know the key is correct

// async function createUser( req, res) {
//     try {
//         const createReq = await User.create(req.body)
//         res.json(createReq)
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }

// async function getUserById( req, res) {
//     try {
//         const foundOne = await User.findById( req.params.id ).populate("restrictions")
//         res.json(foundOne)
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }
// async function getAllUsers(req, res) {
//     try {
//         const getReq = await User.find().populate("restrictions")
//         res.json(getReq);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }
// //front end
// //submitHandler
// //update route for adding to favorites, use newRecipe as the ID
// //let variable = checkRecipe()
// //updateFavorite(variable)


// //checkRecipe\ just to see if its in DB, not fav list
// //recipe will already be displayed in HTML and set in state
// // const [ recipe, setRecipe] = useState
// // const newRecipe = 0 store the recipe ID
// //axios.get(api_id) is this ID found?
// // no, then axios.post(recipe)
// // return newRecipe (the recipe_id)


// async function updateOne(req, res){
//     //recipe_id=0
//     //is there a recipe? recipe.findOne('api_id', 'xxxx')
//     // if yes recipe_id = DB Id
//     //if no, add to DB, recipe.insert(from_req)
//     const option = {
//         new: true,
//         runValidators: true
//     }
//     //maybe try without option
//     try {
//         const updated = await User.findByIdAndUpdate(req.params.id, req.body, option)
//         //console.log(req.body)  to find how to get to recipe info
//         //const updated = await User.findByIdAndUpdate(req.params.id, {$push: {favorites: {req.body.recipe_id: }}, option?? )
//         res.json( updated )
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }

// async function deleteUser(req, res) {
//     try {
//         const deleted = await User.findByIdAndDelete(req.params.id)
//         res.json( deleted )
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }


// export {
//     getAllRestrictions, 
//     addRestriction,
//     updateRestriction,
//     deleteRestriction,
//     getOneById,
//     createRecipe,
//     getAllRecipesInDB,
//     deleteRecipe,
//     createUser,
//     getUserById,
//     updateOne,
//     deleteUser,
//     getAllUsers,
// };