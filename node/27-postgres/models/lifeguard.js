'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    hotness_index: DataTypes.INTEGER
  },
  {
    timestamps: false, tableName: 'lifeguards'
  });
  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: 'beach_id',
      onDelete: 'CASCADE'
    });
  };
  return Lifeguard;
};
