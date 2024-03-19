import {Router} from 'express'
// import {getAllRestrictions, addRestriction, updateRestriction, deleteRestriction, 
//         getOneById, createRecipe, getAllRecipesInDB, deleteRecipe, deleteUser, getUserById, createUser, getAllUsers } from '../controllers/project.controller.js'
import { getAllRestrictions, addRestriction, updateRestriction, deleteRestriction } from '../controllers/RestrictionController.js'
import { getOneById, createRecipe, getAllRecipesInDB, deleteRecipe } from '../controllers/RecipeController.js'
import { deleteUser, getUserById, createUser, getAllUsers } from '../controllers/UserController.js'
//import all controller functions from the controller file

const router = Router()

//----restriction routes----------//

router.route("/restrictions")
    .get( getAllRestrictions)
    .post( addRestriction )

router.route("/restrictions/:id/update")
    .put( updateRestriction )

router.route("/restrictions/:id")
    .delete( deleteRestriction )


//-------Recipe Routes ------------//

router.route("/recipe")
    .get( getAllRecipesInDB)
    .post( createRecipe )

router.route("/recipe/:idMeal/details")
    .get( getOneById )

// router.route("/recipe/:id/update")
//     .put( updateOne )

router.route("/recipe/:id")
    .delete( deleteRecipe )

//------------User Routes-------------//

router.route("/user")
    .post( createUser )
    .get ( getAllUsers )

router.route("/user/:id")
    .get ( getUserById )
    .delete ( deleteUser )

export default router