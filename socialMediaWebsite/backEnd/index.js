import express from 'express';
import connect from './connection.js';
import { router } from './routes/usersRoute.js';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());
app.use('/user', router);

connect('mongodb://127.0.0.1:27017/instagram')
.then((res)=> 
{
    console.log("Database now connected");
})
.catch((err) => {
    console.log("Invalid Connection-" ,err);
})


app.listen(5500,()=>{
    console.log("Server is running Now on -",5500);
})