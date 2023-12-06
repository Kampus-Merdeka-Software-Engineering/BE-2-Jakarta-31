import db from "../config/database.js";
import {DataTypes} from "sequelize";

const criticsModel = db.define('critics', {
    email:{
        type: DataTypes.STRING,
    },
    pesan:{
        type: DataTypes.TEXT,
    },
})

export default criticsModel;