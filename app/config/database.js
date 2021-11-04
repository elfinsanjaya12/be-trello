module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'clone_trello',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'myukxsiztcusuh',
    password:
      'fc2b9ca0044c08b488be72c5d715c6826ff8e9fc367356fa39dc2ba4e1b71e82',
    database: 'd913r2o9enmdtt',
    host: 'ec2-18-210-233-138.compute-1.amazonaws.com',
    post: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  },
};
