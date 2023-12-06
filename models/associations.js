import db from "../config/database.js";
import criticsModel from "./criticsModel.js";
import userModel from "./userModel.js";
import subsModel from "./subsModel.js";

// userModel.hasMany(criticsModel,{
//     foreignKey: 'user_id'
// })

// criticsModel.belongsTo(userModel,{
//     foreignKey: 'user_id'
// });

// db.sync();