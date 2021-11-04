const { body, param, validationResult } = require('express-validator');
const { Todo, Item } = require('../../db/models');

module.exports = {
  validateCreate: [
    body('name').notEmpty().withMessage('name is required'),
    body('TodoId')
      .notEmpty()
      .withMessage('TodoId is required')
      .bail()
      .isNumeric()
      .withMessage('TodoId must be an integer')
      .bail()
      .custom(async (value, { req }) => {
        const checking = await Todo.findOne({ where: { id: value } });
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage('TodoId not found'),

    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: 'error',
          error: error.array(),
        });
      }

      next();
    },
  ],

  validateOne: [
    param('id')
      .notEmpty()
      .withMessage('param id is required')
      .bail()
      .isNumeric()
      .withMessage('id must be an integer')
      .bail()
      .custom(async (value, { req }) => {
        const checking = await Item.findOne({ where: { id: value } });
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage('param id not found'),

    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: 'error',
          error: error.array(),
        });
      }

      next();
    },
  ],
  validateUpdate: [
    param('id')
      .notEmpty()
      .withMessage('param id is required')
      .bail()
      .isNumeric()
      .withMessage('id must be an integer')
      .bail()
      .custom(async (value, { req }) => {
        const checking = await Item.findOne({ where: { id: value } });
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage('param id not found'),
    body('name').notEmpty().withMessage('name is required'),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: 'error',
          error: error.array(),
        });
      }

      next();
    },
  ],
  validateMove: [
    param('id')
      .notEmpty()
      .withMessage('param id is required')
      .bail()
      .isNumeric()
      .withMessage('id must be an integer')
      .bail()
      .custom(async (value, { req }) => {
        const checking = await Item.findOne({ where: { id: value } });
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage('param id not found'),
    body('targetTodoId')
      .notEmpty()
      .withMessage('name is required')
      .bail()
      .custom(async (value, { req }) => {
        const checking = await Todo.findOne({ where: { id: value } });
        if (checking === null) {
          return Promise.reject();
        }
      })
      .withMessage('targetTodoId not found'),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({
          message: 'error',
          error: error.array(),
        });
      }

      next();
    },
  ],
};
