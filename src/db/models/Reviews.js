"use strict";

const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");
module.exports = sequelize.define(
    'Reviews', {
      ReviewID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'UserID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      OrderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'OrderID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Comment: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      ReviewDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
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
        modelName: "Reviews",
      }

)