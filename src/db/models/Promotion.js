"use strict";

const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

module.export = sequelize.define(
  "Promotions",
  {
    PromotionID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    PromotionName: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    Description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    DiscountPercentage: {
      type: Sequelize.FLOAT(5, 2),
      allowNull: true,
    },
    StartDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    EndDate: {
      type: Sequelize.DATE,
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
    modelName: "Pronmotions",
  }
);
