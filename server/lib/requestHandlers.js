const { lost } = require('../../db/config');

exports.postLostItem = (req, res) => {
  lost.create(req.body, (err) => {
    if (err) throw err;

    // must still write here check data base as a call back
  });
  res.send('success on post lost item');
};
