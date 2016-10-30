/**
 * Login middleware
 */
module.exports = function (req, res, next) {
  res.render('login', {title: 'Login'});
};
