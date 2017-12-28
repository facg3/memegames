const queries = require('../db/queries');

const getgame = (req, res) => {
  console.log(req.body);
  queries.getGame(req.body.name, (err, data) => {
    res.send(data[0]);
  });
};
module.exports = getgame;
