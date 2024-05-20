const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development'? err.stack : 'No stack trace available'
    })
}

module.exports = {
    errorHandler,
    // notFoundHandler,
    // notAuthorizedHandler,
    // notAuthenticatedHandler,
    // badRequestHandler,
    // internalServerErrorHandler,
    // unauthorizedHandler,
    // forbiddenHandler,
    // notFoundHandler,
    // badRequestHandler,
    // internalServerErrorHandler,
    // unauthorizedHandler,
    // forbiddenHandler,
    // notFoundHandler,
    // badRequestHandler,
    // internalServerErrorHandler,
    // unauthorizedHandler,
    // forbiddenHandler,
    // notFoundHandler,
    // badRequestHandler,
    // internalServerErrorHandler,
    // unauthorizedHandler,
    // forbiddenHandler,
    // notFoundHandler,
    // badRequestHandler,
    // internalServerErrorHandler,
    // unauthorizedHandler,
    // forbiddenHandler,
    // notFoundHandler,
    // badRequestHandler,
    // internalServerErrorHandler,
    // unauthorizedHandler,
    // forbiddenHandler,
    // notFoundHandler,
    // badRequestHandler,
    // internalServerErrorHandler,
    // unauthorizedHandler,
    // forbiddenHandler,
    // notFoundHandler,
    // badRequestHandler,
    // internalServerErrorHandler,
};