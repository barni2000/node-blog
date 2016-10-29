/**
* Redirect middleware
*/
module.exports = function (to) {

  return function (req, res, next) {
      return res.redirect(to);
  };

};
