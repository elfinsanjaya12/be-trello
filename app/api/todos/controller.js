const { Todo, Item } = require('../../db/models');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await Todo.findAll({
        attributes: ['id', 'name'],
        include: {
          model: Item,
          attributes: ['id', 'name', 'TodoId'],
        },
      });
      res.status(200).json({
        message: 'success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const result = await Todo.create({ name });
      res.status(201).json({
        message: 'success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Todo.findOne({
        where: { id: id },
      });
      res.status(200).json({
        message: 'success',
        data: result,
      });
    } catch (err) {
      next(err);
    }
  },

  update: (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    Todo.findOne({ where: { id: id } })
      .then((todo) => {
        todo.update({ name: name }).then(() => {
          res.status(200).json({
            message: 'success',
            data: todo,
          });
        });
      })
      .catch((err) => {
        next(err);
      });
  },

  destroy: (req, res, next) => {
    const { id } = req.params;
    Todo.findOne({ where: { id: id } })
      .then((todo) => {
        todo.destroy().then(() => {
          res.status(200).json({
            message: 'success',
            data: todo,
          });
        });
      })
      .catch((err) => {
        next(err);
      });
  },
};
