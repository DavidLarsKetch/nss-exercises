'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  },
  {
    timestamps: false, tableName: 'beaches'
  });

  Beach.associate = function(models) {
    Beach.hasMany(models.Lifeguard, {
      foreignKey: 'beach_id'
    });

    Beach.hasMany(models.Castle, {
      foreignKey: 'beach_id'
    });
  };
  return Beach;
};
