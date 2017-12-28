const queries = require('../db/queries');

const getgame = (req, res) => {
  queries.getGame(req.body.name, (err, data) => {

    res.send(data[0].url);
  });
};
module.exports = getgame;
