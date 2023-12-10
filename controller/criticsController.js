import { createCritics } from "../services/criticsService.js"
import apiResponse from "../utils/apiResponse.js"

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
                console.log("Kritik gagal terkirim");
            }
    }catch(error){
        console.error("Error:", error);
        apiResponse(500, null, "Internal Server Error", res);
    }
};

export {postCreateCritics}