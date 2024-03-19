import Recipe from '../models/recipe.model.js'

async function getOneById( req, res) {
    try {
        const foundOne = await Recipe.find( {"idMeal" : req.params.idMeal})
        if (foundOne.length<1) {
            res.status(400).json({errors:'it was empty'})
        } else {
            res.json(foundOne[0])
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
// async function getOneById( req, res) {
//     try {
//         const foundOne = await Recipe.findById( req.params.idMeal )
//         res.json(foundOne)
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }

async function createRecipe( req, res) {
    try {
        const createReq = await Recipe.create(req.body)
        console.log('made it to recipe controller');
        res.json(createReq)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


async function getAllRecipesInDB(req, res) {
    try {
        const getReq = await Recipe.find();
        res.json(getReq);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteRecipe(req, res) {
    try {
        const deleted = await Recipe.findByIdAndDelete(req.params.id)
        res.json( deleted )
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export { getOneById, createRecipe, getAllRecipesInDB, deleteRecipe }