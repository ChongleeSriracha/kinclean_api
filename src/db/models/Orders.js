"use strict";

const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
module.export = sequelize.define(
  "Orders",
  {
    OrderID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    OrderDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("NOW()"),
    },
    TotalAmount: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    UserID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "UserID",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    PromotionID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Promotions",
        key: "PromotionID",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    Status: {
      type: Sequelize.STRING(50),
      allowNull: false,
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
    modelName: "Orders",
  }
);
