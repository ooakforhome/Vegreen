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

  app.get('/api/dishid', (req, res, next) => {
    Regular.find({dishId: req.query.dishId})
      .then(data =>{
        if(data.length>0){
        console.log(res.json(data))
      } else {
        return res.send({"Dish": "NOT EXIST"})
      }
      })
      .catch((err) => next(err));
  });

  app.get('/api/category', (req, res, next) => {
    Regular.find({category: req.query.category})
      .then(data => res.json(data))
        .catch((err) => next(err))
  });

  app.get('/api/dishes', (req, res, next) => {
    Regular.find({$or: [
          {category: req.query.category},
          {dishId: req.query.dishId},
          {name: req.query.name}
        ]
      })
      .then(data => res.json(data))
        .catch((err) => next(err))
  });

  app.get('/api/:category', (req, res, next) => {
    Regular.find({category: req.params.category})
      .sort({dishId: 1})
      .then(data => res.json(data))
        .catch((err) => next(err))
  });

  app.put('/api/editdish', (req, res, err) => {
    Regular.findOneAndUpdate({dishId: req.query.dishId}, req.body)
      .then((dishes) => {
        return res.json(dishes)
      })
      .catch(err);
  });

  app.delete('/api/deletebydishid', (req, res, next) => {
    Regular.findOneAndDelete({dishId: req.query.dishId})
      .then(data =>{
        return res.send({"status": "item deleted"})
      })
      .catch((err) => next(err));
  });

};
