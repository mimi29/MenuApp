
module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.TEXT,
    },
    instructions: {
      type: DataTypes.TEXT
    },
    categoryId: {
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false,
    freezeTableName: false
  });

  Recipe.associate = function(models) {
    Recipe.belongsTo(models.Member, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Recipe;
};