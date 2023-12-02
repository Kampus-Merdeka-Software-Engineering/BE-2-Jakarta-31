const apiResponse = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        payload:{
            status_code: statusCode,
            datas: data,
        },
        message: message,
        // pagination:{
        //     pages: ""
        // }
    })
}
export default apiResponse;