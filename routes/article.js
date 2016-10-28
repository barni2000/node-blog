const authMW = require('../middleware/generic/auth');
const checkUserLoginMW = require('../middleware/generic/checkUserLogin');
const renderMW = require('../middleware/generic/render');
const getArticleListMW = require('../middleware/articles/getArticleList');
const newArticleMW = require('../middleware/articles/newArticle');

module.exports = function(app) {
    
    var objectRepository = {
        articleModel: articleModel
    };

    /**
     * List all article
     */

    app.use('/articles',
        checkUserLoginMW(objectRepository),
        getArticleListMW(objectRepository),
        renderMW(objectRepository, 'articles')
    );

    /**
     * Create new article
     */

    app.use('/articles/new',
        authMW(objectRepository),
        newArticleMW(objectRepository),
        renderMW(objectRepository, 'newarticle')
    );

    /**
     * Edit the article details
     */

    app.use('/article/:id/edit',
        authMW(objectRepository),
        getItemMW(objectRepository),
        getTypeListMW(objectRepository),
        updateItemMW(objectRepository),
        renderMW(objectRepository, 'newarticle')
    );

    /**
     * Delete article
     * - then redirect to /articles
     */

    app.use('/article/:id/delete',
        authMW(objectRepository),
        getItemMW(objectRepository),
        deleteItemMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/articles');
        }
    );
};