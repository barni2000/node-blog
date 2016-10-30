const renderMW = require('../middleware/generic/render');
const redirectMW = require('../middleware/generic/redirect')
const loginMW = require('../middleware/auth/login');
const logoutMW = require('../middleware/auth/logout');

module.exports = function(app) {

  app.use('/login',
    loginMW
  );

  app.get('/logout',
    logoutMW,
    redirectMW('/')
  );
}
