const createError = require("http-errors");

// 404 not found route error here
function not__found__route(req, res, next) {
  next(createError(404, "Page not found...!"));
}

// default error handler here
function error__handler(err, req, res, next) {
  res.json(err);
}

// handlers are export here

module.exports = {
  not__found__route,
  error__handler,
};
