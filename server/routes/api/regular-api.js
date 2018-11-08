const Regular = require('../../models/RegularModel');

module.exports = (app) => {
  app.post('/api/newdish', (req, res, next) => {
    Regular.create(req.body)
      .then(dish => res.json(dish))
      .catch((err) => next(err));
  });

  app.get('/api/alldishes', (req, res, next) => {
    Regular.find().exec()
      .then((dishes) => res.json(dishes))
      .catch((err) => next(err));
  });
};
