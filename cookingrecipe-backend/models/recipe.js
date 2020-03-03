module.exports = (sequelize, dataTypes) => {
  const Recipe = sequelize.define("Recipe", {
    menu: dataTypes.STRING,
    typeRecipe: dataTypes.TEXT,
    ingradient: dataTypes.TEXT,
    direction: dataTypes.TEXT ,
    image: dataTypes.TEXT
  });



  return Recipe;
};
