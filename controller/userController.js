import apiResponse from "../utils/apiResponse.js";
import userModel from "../models/userModel.js";


const getAllUsers = async (req, res) => {
    try{
        const users = await userModel.getAllUser();
        apiResponse(200, users, "Get all data from users", res);
    }catch(error){
        apiResponse(500, null, "Error getting data from users", res);
    }
};

const createUser = async (req, res) => {
    try {
        
        const { nama, email, password } = req.body;
        const isEmailExist = await userModel.isEmailExist(email);
        if(isEmailExist){
            apiResponse(500,null , "Email tersebut sudah ada", res)
        }else{

        const result = await userModel.createUser(nama, email, password);
        if (result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                id: result.insertId,
            };
            apiResponse(200, data, 'Register Berhasil', res);
        } else {
            console.log("Register gagal");
        }
    }
    } catch (error) {
        console.error('Error creating user:', error.message);
        apiResponse(500, null, 'Internal Server Error', res);
    }
};

const loginUser = async (req, res) =>{
    const { email, password } = req.body;
    try {
        const user = await userModel.loginUser(email, password);
        
        if(user){
            req.session.user = user;
            apiResponse(200, "Login Success", "Login Success", res)
        } else {
          apiResponse(401, null, 'Invalid email or password', res);
        }  
    }catch (error) {
            console.error('Error during login:', error);
            apiResponse(500, null, 'Internal Server Error', res);
          }
    };

const logoutUser = (req, res) => {
    req.session.destroy((err) =>{
        if(err){
            console.error("Error during logout:", err)
            apiResponse(500,err,"Internal Server Error", res)
        }
            res.json({ message: "Logout Successfull"});
    });

}

    const userSession = async(req, res) =>{
        if (req.session.user) {
            apiResponse(200, { user: req.session.user }, 'Access granted', res);
        } else {
            apiResponse(401, null, 'Unauthorized', res);
        }
    };
    

export { getAllUsers, createUser, loginUser, logoutUser ,userSession };
