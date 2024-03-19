import {model, Schema} from 'mongoose';

const recipeSchema = new Schema(
    //define the model object literal
    {
        idMeal: {
            type: String
        },
        name: {
            type: String,
            required: [true, "A name is required!"],
            minlength: [2, "Recipe name must be at least 2 characters long!"],
            maxlength: [100, "Recipe name must be less than 100 characters long"]
        },
        directions: {
            type: String,
            required: [true, "Directions are required!"],
            minlength: [4, "Directions must be at least 4 characters long!"],
            maxlength: [255, "Directions must be less than 255 characters long"]
        },
        ingredients: {
            type: Array
        },
        thumbnail: {
            type: String
        }
    },
    { timestamps: true }
);

const Recipe = model("recipeModel", recipeSchema);
export default Recipe;