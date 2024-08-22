"use strict";

const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
module.exports = sequelize.define(
    'Materials', 
    {
      MaterialID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      MaterialName: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      Description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      Quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      FoodID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Foods',
          key: 'FoodID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      }},
      {
        paranoid: true,
        freezeTableName: true,
        modelName: "Materials",
      }
);