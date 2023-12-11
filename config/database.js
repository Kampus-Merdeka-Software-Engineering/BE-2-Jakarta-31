import { Sequelize } from 'sequelize';
import dotenv  from "dotenv";

dotenv.config();


const {DB_NAME, DB_PASSWORD, DB_USER, DB_URI} = process.env
const db = new Sequelize(DB_URI,{
    define:{
        timestamps: false
    }
});


//local
// const db = new Sequelize('newsportal','root','',{
//     host: "localhost",
//     dialect: 'mysql',
// })

export default db