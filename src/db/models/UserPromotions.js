"use strict";

const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define(
    "UserPromotions",
    {

        UserPromotionID: {
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
          PromotionID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Promotions',
              key: 'PromotionID'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          ClaimedDate: {
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
          }
    },
    {
        paranoid: true,
        freezeTableName: true,
        modelName: "UserPromotions",
      }
)
