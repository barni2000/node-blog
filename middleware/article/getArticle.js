/**
 * Get the article
 */

module.exports = function (req, res, next) {
  res.write(`ArticleID: ${req.params.article_id}\n`);
  return next();
};
