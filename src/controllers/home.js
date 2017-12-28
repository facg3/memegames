const queries = require('../db/queries');

exports.get = (req, res) => {
  queries.recentGame((err, data) => {
    res.render('home', { game: data[0].url });
  });
};
