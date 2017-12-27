const getGameQuery = require('../db/getGame');
const getGame = (req, res) => {
  getGameQuery((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render()
    }
  })
}
