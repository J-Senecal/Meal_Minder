import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
//This will import the database connection function we will build inside the mongoose.config file
import router from './routes/project.routes.js'; //route name file path

const app = express();

app.use(express.json(), cors()); //This sets up express with json data and cors.
app.use('/api', router); //for server routing to designate path 

dotenv.config(); //load any environmental variables stored inside your .env file (secret keys, port)

const PORT = process.env.PORT;
//Now that your environmental variables are loaded, you can pull them out and store them in variables within Node. process.env is the prefix that we always use, and then PORT refers to the name of your variable.
dbConnect();
//This runs your database connection. In the previous import, you only brought the function into this file, but this is where it gets run for the first time.

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);