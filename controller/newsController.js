import axios from 'axios';
import apiResponse from "../utils/apiResponse.js";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;
const apiUrl = 'https://newsapi.org/v2/top-headlines';
const country = 'us';
const pageSize = 15;

const getNewsByCategory = async (category, res) =>{
    try{
        const responseFromApi = await axios.get(apiUrl,{
            params: {
                country: country,
                category: category,
                apiKey: apiKey,
                pageSize: pageSize,
            },
        });
        apiResponse(200, responseFromApi.data,"Success", res);
    } catch (error) {
        console.error(" Error fetching news:", error.message);
        apiResponse(500, null, 'internal Server Error', res)
    }
};

export {getNewsByCategory};