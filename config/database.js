import { Sequelize } from 'sequelize';

const db = new Sequelize('newsportal','root','',{
    host: "localhost",
    dialect: "mysql",
})

export default db