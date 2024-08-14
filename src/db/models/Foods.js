"use strict";

const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
module.exports = sequelize.define(
  "Foods",
  {
    FoodID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    FoodName: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    Description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    Price: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    Category: {
      type: Sequelize.STRING(50),
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
    modelName: "Foods",
  }
);
