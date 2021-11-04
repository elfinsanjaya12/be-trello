var express = require('express');
var router = express.Router();
const { create, getOne, update, destroy, move } = require('./controller');
const {
  validateCreate,
  validateOne,
  validateUpdate,
  validateMove,
} = require('./validation');

router.post('/items', validateCreate, create);
router.get('/items/:id', validateOne, getOne);
router.put('/items/:id', validateUpdate, update);
router.put('/items/:id/move', validateMove, move);
router.delete('/items/:id', validateOne, destroy);

module.exports = router;
