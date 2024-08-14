"use strict";

const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define(
  "OrderDetail",
  {
    OrderDetailID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    OrderID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Orders",
        key: "OrderID",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    FoodID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Foods",
        key: "FoodID",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    Quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Subtotal: {
      type: Sequelize.FLOAT(10, 2),
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
    modelName: "OrderDetails",
  }
);
