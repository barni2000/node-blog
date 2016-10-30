const renderMW = require('../middleware/generic/render');
const redirectMW = require('../middleware/generic/redirect');
const authMW = require('../middleware/auth/auth');
const newArticleMW = require('../middleware/article/newArticle');
const getArticleMW = require('../middleware/article/getArticle');
const editArticleMW = require('../middleware/article/editArticle');
const deleteArticleMW = require('../middleware/article/deleteArticle');

module.exports = function(app) {
  /**
  * New article
  */
  app.get('/article/new',
    authMW,
    newArticleMW
  );

  /**
  * Get the article
  */
  app.get('/article/:article_id',
    getArticleMW
  );

  /**
   * Edit the article
   */
  app.use('/article/:article_id/edit',
    authMW,
    editArticleMW
  );

  /**
   * Delete article
   * - then redirect to /articles
   */
  app.use('/article/:article_id/delete',
    authMW,
    deleteArticleMW,
    redirectMW('/')
  );
};
