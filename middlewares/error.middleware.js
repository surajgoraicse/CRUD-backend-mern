
const handleErrorMiddleware = (err, req, res, next) => {
    // setting default values in case data is not coming from ApiErrors
    const response = {
        statusCode: err.statusCode || 500 ,
        message: err.message || "Internal server error",
        success: err.success || false,
        data: err.data || null,
        errors: err.errors || [],
    }
    // Including stack in development environment
    if (process.env.NODE_ENV === "develeopment") {
        response.stack = err.stack 
    }

    // log the error
    console.log("Error occured : ", response);

    // send response
    res.status(response.statusCode).json(response)
}


export default handleErrorMiddleware