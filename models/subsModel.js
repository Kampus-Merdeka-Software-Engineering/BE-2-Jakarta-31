import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const subsModel = db.define('subscribers', {
  email: {
    type: DataTypes.STRING,
  },
});

export default subsModel;
