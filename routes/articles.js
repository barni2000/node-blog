const renderMW = require('../middleware/generic/render');
const listArticlesMW = require('../middleware/articles/listArticles');

module.exports = function(app) {
  /**
   * List all article
   */
  app.get('/',
      listArticlesMW
  );
}
