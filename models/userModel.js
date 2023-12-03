import bcrypt from "bcrypt";
import db from "../config/database.js";

const userModel = {
    getAllUser: async()  => {
        const sql = "SELECT * FROM users";
        try{
            const[rows, fields] = await db.execute(sql);
            return rows;
        }catch(error){
            console.error("Error :", error)
            throw error;
        }
    },

    createUser: async(nama, email, password) => {
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `INSERT INTO users (nama, email, password) 
            VALUES (?, ?, ?)`;
        try{
            const[result] = await db.execute(sql, [nama, email, hashedPassword]);
            return result;
        } catch (error){
            console.error("Error :", error)
            throw error;
        }
    },

    loginUser: async(email, password) =>{
        const sql = "SELECT * FROM users WHERE email = ?";
        try{
            const[rows, fields] = await db.execute(sql, [email]);
            const user = rows[0];
            if (user) {
                const isPasswordMatch = await bcrypt.compare(password, user.password);
                return isPasswordMatch ? user : null;
            } else {
                return null;
            }
        } catch (error){
            console.error("Error login user by email:", error)
            throw error;
        }
    },

    isEmailExist: async(email) =>{
        const sql = "SELECT COUNT(*) as count FROM users WHERE email = ?";
        const [result] = await db.execute(sql, [email]);
        return result[0].count > 0;
    },
    
    addSubscriber: async (email)=>{
        try{
            const sql = `INSERT INTO subscribers (email) VALUES (?)`;
            const [result] = await db.execute(sql, [email]);
            return result;
        } catch(error){
            console.error("Error adding subscriber: ", error);
            throw error;
        }
    },
}

export default userModel;