import {subsModel} from "../models/index.js";

const createSubscribers = async (email) =>{
    return await subsModel.create({
        email:email,
    })
}

export {createSubscribers}