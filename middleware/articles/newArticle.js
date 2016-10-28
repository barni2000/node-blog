const requireOption = require('../common').requireOption;

/**
 * Get the article list
 */

module.exports = function (objectrepository) {

    var articleModel = requireOption(objectrepository, 'articleModel');

    return function (req, res, next) {

        return next();
    };
};