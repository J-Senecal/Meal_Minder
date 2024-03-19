import {model, Schema} from 'mongoose';

const restrictionSchema = new Schema(
    //define the model object literal
{
    food: {
        type: String,
        required: [true, "Oops, you didn't type anything"],
        minlength: [2, "Restriction must be at least 2 characters long!"],
        maxlength: [50, "That's a really long food name....try again"]
    },
},
{ timestamps: true }
);
const Restriction = model("Restriction", restrictionSchema);
export default Restriction;
