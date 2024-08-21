'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create User Table
    await queryInterface.createTable('Users', {
      UserID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      FirstName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      LastName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Username: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      Password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      PhoneNumber: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      Address: {
        type: Sequelize.TEXT,
        allowNull: true
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
    });

    // Create Promotion Table
    await queryInterface.createTable('Promotions', {
      PromotionID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      PromotionName: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      Description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      DiscountPercentage: {
        type: Sequelize.FLOAT(5, 2),
        allowNull: true
      },
      StartDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      EndDate: {
        type: Sequelize.DATE,
        allowNull: true
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
    });

    // Create Food Table
    await queryInterface.createTable('Foods', {
      FoodID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      FoodName: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      Description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      Calories: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      CookingTime: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      CanEaten: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Star: {
        type: Sequelize.FLOAT(5, 2),
        allowNull: true
      },
      Price: {
        type: Sequelize.FLOAT(10, 2),
        allowNull: false
      },
      Category: {
        type: Sequelize.STRING(50),
        allowNull: true
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
    });

    // Create Order Table
    await queryInterface.createTable('Orders', {
      OrderID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      OrderDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      TotalAmount: {
        type: Sequelize.FLOAT(10, 2),
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
        allowNull: true,
        references: {
          model: 'Promotions',
          key: 'PromotionID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      Status: {
        type: Sequelize.STRING(50),
        allowNull: false
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
    });

    // Create OrderDetails Table
    await queryInterface.createTable('OrderDetails', {
      OrderDetailID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
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
      Quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Subtotal: {
        type: Sequelize.FLOAT(10, 2),
        allowNull: false
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
    });

    // Create Material Table
    await queryInterface.createTable('Materials', {
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
      }
    });

    // Create Review Table
    await queryInterface.createTable('Reviews', {
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
      }
    });

    // Create UserPromotion Table
    await queryInterface.createTable('UserPromotions', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Drop tables in reverse order to handle foreign key dependencies
    await queryInterface.dropTable('UserPromotions');
    await queryInterface.dropTable('Reviews');
    await queryInterface.dropTable('Materials');
    await queryInterface.dropTable('OrderDetails');
    await queryInterface.dropTable('Orders');
    await queryInterface.dropTable('Foods');
    await queryInterface.dropTable('Promotions');
    await queryInterface.dropTable('Users');
  }
};
