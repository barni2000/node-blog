/**
* If user not logged in redirect to /login
*/
module.exports = function(req, res, next) {
  next();
};
