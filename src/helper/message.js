// send response
const sendResponse = (res, status, data = null, error = null) => {
    res.status(status).json({
        status: status === 200 ? 'success' : 'error',
        data,
        error
    });
};

module.exports = {
    sendSuccess: (res, data) => sendResponse(res, 200, data),
    sendError: (res, error) => sendResponse(res, 400, null, error),
    sendErrorPageNotFound: (res, error) => sendResponse(res, 404, null, error)
};
