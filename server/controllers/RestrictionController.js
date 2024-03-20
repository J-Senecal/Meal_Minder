import Restriction from '../models/restrictions.model.js'
import User from '../models/user.model.js'

let myToken = {firstName:"Justin", _id:"65f658c03cd946af0e3403cb"}

async function addRestriction( req, res) {
    try {
        const createReq = await Restriction.create(req.body).then( (r)=> User.findByIdAndUpdate({_id:myToken._id}, {$push: { restrictions: {_id:r._id}}} ))
        console.log(createReq);
        res.json(createReq)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
//first try

// async function addRestrictionToUser( req, res) {
//     try {
//         const updateUser= await User.findByIdAndUpdate({_id:myToken._id}, {$push: { restrictions: {_id:"65f3bca3057f48b5613c35d8"}}} )
//         res.json(updateUser)
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }
//working for just adding to restrictions table, no user
// async function addRestriction( req, res) {
//     try {
//         const createReq = await Restriction.create(req.body)
//         res.json(createReq)
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// }

async function getAllRestrictions(req, res) {
    try {
        const getReq = await Restriction.find();
        res.json(getReq);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateRestriction(req, res){
    const option = {
        new: true,
        runValidators: true
    }
    try {
        const updated = await Restriction.findByIdAndUpdate(req.params.id, req.body, option)
        res.json( updated )
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteRestriction(req, res) {
    try {
        const deleted = await Restriction.findByIdAndDelete(req.params.id)
        res.json( deleted )
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export { addRestriction, getAllRestrictions, updateRestriction, deleteRestriction }