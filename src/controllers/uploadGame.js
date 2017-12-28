const queries = require('../db/queries');

exports.post = (req, res) => {
  const { name, url } = req.body;
  if(url.includes('.swf')){
  queries.addGame(name, url, (err, data) => {
    if (err) return res.status(500).send({ message: 'Error in database!' });
    res.redirect('/singlePage?s=true');

  });
}
  else {
    res.redirect('singlePage?s=false');
  }
}
