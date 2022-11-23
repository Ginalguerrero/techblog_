const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  isPasswordValid(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4],
    },
  },
}, {
  hooks: {
      beforeCreate: (data) => {
          data.password = bcrypt.hashSync(data.pasword, 11);
          return data;
      },
      beforeUpdate: (data) => {
          data.password = bcrypt.hashSync(data.pasword, 11);
          return data;
      }
  }
}
);