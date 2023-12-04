import db from "../config/database.js";
import { DataTypes } from "sequelize";

const userModel = db.define('users',{
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.TEXT
    }
});

export default userModel;