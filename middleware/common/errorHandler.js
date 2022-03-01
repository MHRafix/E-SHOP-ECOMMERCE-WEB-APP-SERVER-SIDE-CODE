const createError = require("http-errors");

// 404 not found route error here
function notFoundRoute(req, res, next) {
  next(createError(404, "Page not found...!"));
}

// default error handler here
function errorHandler(err, req, res, next) {
  res.json(err);
}

// handlers are export here

module.exports = {
  notFoundRoute,
  errorHandler,
};
