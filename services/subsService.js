import {subsModel} from "../models/index.js";

const createSubscribers = async (email) =>{
    return await subsModel.create({
        email:email,
    })
}

const isEmailExist = async (email) => {
    return await subsModel.findOne({where: {email: email}})
}

export {createSubscribers, isEmailExist}