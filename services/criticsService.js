import criticsModel from "../models/criticsModel.js"

const getCritics = async() => {
    return await criticsModel.findAll()
}

const createCritics = async (email ,pesan) =>{
    return await criticsModel.create({
        email: email,
        pesan: pesan,
    });
}

export {createCritics, getCritics}