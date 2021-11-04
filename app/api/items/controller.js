const { Todo, Item } = require('../../db/models');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name, TodoId } = req.body;
      const result = await Item.create({ name, TodoId });
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
      const result = await Item.findOne({
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
    Item.findOne({ where: { id: id } })
      .then((item) => {
        item.update({ name }).then(() => {
          res.status(200).json({
            message: 'success',
            data: item,
          });
        });
      })
      .catch((err) => {
        next(err);
      });
  },

  destroy: (req, res, next) => {
    const { id } = req.params;
    Item.findOne({ where: { id: id } })
      .then((item) => {
        item.destroy().then(() => {
          res.status(200).json({
            message: 'success',
            data: item,
          });
        });
      })
      .catch((err) => {
        next(err);
      });
  },

  move: async (req, res) => {
    try {
      const { id } = req.params;
      const { targetTodoId } = req.body;
      const result = await Item.findOne({ where: { id: id } });

      result.TodoId = targetTodoId;

      await result.save();

      res.status(200).json({ message: 'success', data: result });
    } catch (err) {
      next(err);
    }
  },
};
