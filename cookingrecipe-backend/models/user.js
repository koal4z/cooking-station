module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define("User", {
    email: dataTypes.STRING,
    password: dataTypes.STRING,
    name: dataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Recipe);
  };

  return User;
};
