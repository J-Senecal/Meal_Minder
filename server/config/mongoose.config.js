import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
async function dbConnect() {
    try {
        await connect(MONGODB_URI, { //this is the environmental variable from your .env file
            dbName: 'MealMinderDB', //enter the name of your database from Atlas
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbConnect;