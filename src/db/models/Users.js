"use strict";

const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
module.exports = sequelize.define(
  "Users",
  {
    UserID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Username: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    Email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    },
    Password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    PhoneNumber: {
      type: Sequelize.STRING(15),
      allowNull: true,
    },
    Address: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("NOW()"),
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("NOW()"),
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    modelName: "Users",
  }
);
