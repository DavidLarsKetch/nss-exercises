'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER
  },
  { timestamp: false, tableName: 'castles' });
  Castle.associate = function(models) {
    Castle.belongsTo(models.Beach, {
      foreignKey: 'beach_id',
      onDelete: 'CASCADE'
    });
  };
  return Castle;
};
