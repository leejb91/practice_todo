var express = require('express'),
    router  = new express.Router();

// Require controllers.
var todosCtrl = require('../controllers/todos');

// Require token authentication.
// var token = require('../config/token_auth');

// posts resource paths:
router.get(   '/todos',     todosCtrl.index);
router.get(   '/todos/:id', todosCtrl.show);
router.post(  '/todos',     todosCtrl.create);
router.put(   '/todos',     todosCtrl.update);
router.delete('/todos/:id', todosCtrl.destroy);


// translations resource paths:
router.get(   '/todos/:id', todosCtrl.show);
router.post(  '/todos',     todosCtrl.create);
router.put(   '/todos/:id', todosCtrl.update);
router.delete('/todos/:id', todosCtrl.destroy);

module.exports = router;
