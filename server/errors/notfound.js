const  { createCustomError } =  require("./customAPTError");

const notFound = (req, res, next) => {
    console.log(req.body);
    const notFoundError = createCustomError(`Cannot find ${req.originalUrl} at this server`, 404);
    return next(notFoundError);
};

module.exports = notFound;