'use strict';

const sequelize = require('sequelize');
const queryInterface = require('sequelize/lib/query-interface');

const { beaches } = require('./data/beaches.json');
const { lifeguards } = require('./data/lifeguards.json');
const { castles } = require('./data/castles.json');

const createdb = queryInterface => {
  const app = require('./app');
  const models = app.get('models');
  return models.sequelize.sync({ force: true })
  .then(queryInterface => {
    return models.Beach.bulkCreate(beaches);
  })
  .then(queryInterface => {
    return models.Lifeguard.bulkCreate(lifeguards);
  })
  .then(queryInterface => {
    return models.Castle.bulkCreate(castles);
  })
  .then(() => {
    process.exit();
  })
  .catch(err => {
    console.log('errrrrorrrr');
  });
};

createdb(queryInterface);
