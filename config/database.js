import mysql2 from 'mysql2/promise';

const db = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newsportal"
})

export default db