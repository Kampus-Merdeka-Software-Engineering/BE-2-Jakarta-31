import { Sequelize } from 'sequelize';
import {dotenv} from "dotenv";

dotenv.config();


const {DB_NAME, DB_PASSWORD, DB_USER, DB_URI} = process.env
const db = new Sequelize(DB_URI,{
    define:{
        timestamps: false
    }
});


//local
// const db = new Sequelize('DB_NAME','DB_USER','DB_PASSWORD',{
//     host: "DB_HOST",
//     dialect: "DB_DIALECT",
// })

export default db