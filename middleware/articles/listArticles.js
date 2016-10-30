const marked = require('marked')

/**
 * List articles
 */
module.exports = function (req, res, next) {
  const text = `
# Non incalfacit

## Ferox candor mollibat et quid quos ut

Lorem markdownum aquis. Dea non conpescit aera. Et redeunt sibila certe similis,
haerebat quis, pensa conscia; et et sub resumit.

Scilicet Nasamoniaci [petit receptae](http://aer.io/), opto mergeret peccasse,
sinit quoque [quem](http://www.aqua.com/declinat) accensae, ad. Initis vero ver
formam quisquam animaeque vestes. Nec illo gyrum sternitur multaque venienti
[pendebat bella](http://www.saxum-avidisque.io/), viro noster, quem sumptis fuit
crudelem laticem.
  `;
  const articles = [
    {id:1, author: 'User', date:'2016.01.01 10:12', text:marked(text)},
    {id:2, author: 'User', date:'2016.01.01 10:12', text:marked(text)},
    {id:3, author: 'User', date:'2016.01.01 10:12', text:marked(text)},
  ];

  res.render('articles', {title: 'BlogName', articles: articles})
};
