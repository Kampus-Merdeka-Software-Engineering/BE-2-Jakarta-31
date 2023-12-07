import {createSubscribers, isEmailExist} from "../services/subsService.js"
import apiResponse from "../utils/apiResponse.js";

const postCreateSubscriber = async(req, res) =>{
    try{
        const {email} = req.body;
            if(await isEmailExist(email)){
                return apiResponse(409,null , "Subscribe gagal, Email sudah ada", res);
            }

        const result = await createSubscribers(email);
        if(result){
            const data = {
                isSuccess: true,
                id: result.id
            };
            apiResponse(200, data, "Berhasil Subscribe", res);
        }else{
            console.log("Subscribe Gagal");
        }
    }catch (error){
        console.error("Error:", error);
        apiResponse(500, null, "Internal Server Error", res);
    }
};

export { postCreateSubscriber };