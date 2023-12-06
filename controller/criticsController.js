import { createCritics, getCritics } from "../services/criticsService.js"
import apiResponse, {} from "../utils/apiResponse.js"


const readCritics = async(req, res)=> {
    try{
        const data = await getCritics()
        apiResponse(200, data, "Get all critics from users", res);
    }catch(error){
        apiResponse(500, error, "Error getting critics from users", res);
    }
    
}


const postCreateCritics = async(req, res) => {
        try{
            const {email, pesan} = req.body;
            const newCritics = await createCritics(email, pesan);
            if(newCritics){
                const data = {
                    isSuccess: true,
                    id: newCritics.id
                }
                apiResponse(200, data,"Kritik berhasil terkirim", res);
            }else{
                apiResponse(500, null, "Kritik gagal terkirim", res);
            }
    }catch(error){
        console.error("Error:", error);
        apiResponse(500, null, "Internal Server Error", res);
    }
};

export {postCreateCritics, readCritics}