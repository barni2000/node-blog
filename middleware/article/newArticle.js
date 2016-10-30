/**
 * New article
 */

module.exports = function (req, res, next) {
  res.render('new', {title: 'New Article', text:''})
};
