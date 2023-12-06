import apiResponse from "../utils/apiResponse.js";
import bcrypt from "bcrypt";
import { readUser, createUser, isEmailExist } from "../services/userService.js";


    const getAllUsers = async (req, res) => {
        try{
            const users = await readUser();
            apiResponse(200, users, "Get all data from users", res);
        }catch(error){
            apiResponse(500, null, "Error getting data from users", res);
        }
        
    };

    const postCreateUser = async (req, res) => {
        try {
            const { nama, email, password } = req.body;
            if(await isEmailExist(email)){
                return apiResponse(500,null , "Email tersebut sudah ada", res);
            }

            const newUser = await createUser(nama,  email, password);
            if (newUser) {
                const data = {
                    isSuccess: true,
                    id: newUser.id,
                };
                apiResponse(200, data, 'Register Berhasil', res);
            } else {
                console.log("Register gagal");
            }
        
        } catch (error) {
            console.error('Error creating user:', error.message);
            if(!res.headersSent){
                apiResponse(500, null, 'Internal Server Error', res);
            }
        }
    };

    const loginUser = async (req, res) =>{
        const { email, password } = req.body;
        try {
            const user = await isEmailExist(email);
            if(user && await bcrypt.compare(password, user.password)){
                req.session.user = user;
                return apiResponse(200, "Login Success", "Login Success", res)    
            }
                apiResponse(401, null, 'Invalid email or password', res);  
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
    };

    const userSession = async(req, res) =>{
        if (req.session.user) {
            apiResponse(200, { user: req.session.user }, 'Access granted', res);
        } else {
            apiResponse(401, null, 'Unauthorized', res);
        }
    };

    

export { getAllUsers, postCreateUser, loginUser, logoutUser ,userSession };
