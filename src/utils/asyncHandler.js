// utils/asyncHandler.js
const asyncHandler = (requestHandler) => {
    // This is the function that Express will actually call
    // So, we need to return it from asyncHandler
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err)); // Pass any caught errors to the next error-handling middleware
    };
};

export default asyncHandler;


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     }
//     catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message || "Internal server error"
//         })
//         next(error)
//     }
// }