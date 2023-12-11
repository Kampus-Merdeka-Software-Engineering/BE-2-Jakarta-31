import { Sequelize } from 'sequelize';
import dotenv  from "dotenv";

dotenv.config();


const {DB_NAME, DB_PASSWORD, DB_USER, DB_URI} = process.env
const db = new Sequelize(DB_URI,{
    define:{
        timestamps: false
    }
});


export default db