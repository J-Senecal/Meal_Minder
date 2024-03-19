import {model, Schema} from 'mongoose';
import Recipe from './recipe.model.js';
import Restriction from './restrictions.model.js';

const userSchema = new Schema(
    //define the model object literal
    {
        firstName: {
            type: String,
            required: [true, "First name is required!"],
            minlength: [2, "First name must be at least 2 characters long!"],
            maxlength: [255, "First name must be less than 255 characters long"]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required!"],
            minlength: [2, "Last name must be at least 2 characters long!"],
            maxlength: [255, "Last name must be less than 255 characters long"]
        },
        restrictions: {
            type: [Schema.Types.ObjectId],
            ref: 'Restriction'
        },
        favorites: {
            type: [Schema.Types.ObjectId],
            ref: 'Recipe'
        }
    },
    { timestamps: true }
);

const User = model("userModel", userSchema);
export default User;