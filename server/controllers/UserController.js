import User from '../models/user.model.js'

async function createUser( req, res) {
    try {
        const createReq = await User.create(req.body)
        res.json(createReq)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getUserById( req, res) {
    try {
        const foundOne = await User.findById( req.params.id ).populate("restrictions")
        res.json(foundOne)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function getAllUsers(req, res) {
    try {
        const getReq = await User.find().populate("restrictions")
        res.json(getReq);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
//front end
//submitHandler
//update route for adding to favorites, use newRecipe as the ID
//let variable = checkRecipe()
//updateFavorite(variable)


//checkRecipe\ just to see if its in DB, not fav list
//recipe will already be displayed in HTML and set in state
// const [ recipe, setRecipe] = useState
// const newRecipe = 0 store the recipe ID
//axios.get(api_id) is this ID found?
// no, then axios.post(recipe)
// return newRecipe (the recipe_id)


async function updateOne(req, res){
    //recipe_id=0
    //is there a recipe? recipe.findOne('api_id', 'xxxx')
    // if yes recipe_id = DB Id
    //if no, add to DB, recipe.insert(from_req)
    const option = {
        new: true,
        runValidators: true
    }
    //maybe try without option
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, option)
        //console.log(req.body)  to find how to get to recipe info
        //const updated = await User.findByIdAndUpdate(req.params.id, {$push: {favorites: {req.body.recipe_id: }}, option?? )
        res.json( updated )
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteUser(req, res) {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id)
        res.json( deleted )
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export { createUser, getUserById, getAllUsers, updateOne, deleteUser}