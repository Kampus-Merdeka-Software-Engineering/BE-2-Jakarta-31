import {userModel} from "../models/index.js";
import bcrypt from "bcrypt";

const readUser = async ()=>{
    return await userModel.findOne({where: {password: password}});
}

const createUser =  async (nama, email, password) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return await userModel.create({
        nama : nama,
        email : email,
        password : hashPassword
    });
    
}

const isEmailExist = async (email) => {
    return await userModel.findOne({where: {email: email}})
}


export {readUser, createUser, isEmailExist}