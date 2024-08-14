require('dotenv').config(); // Load environment variables

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME, // Adjust as needed
    password: process.env.DB_PASSWORD, // Adjust as needed
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres', // Adjust as needed
  },
  production: {
    username: process.env.DB_USERNAME, // Adjust as needed
    password: process.env.DB_PASSWORD, // Adjust as needed
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres', // Adjust as needed
  },
};
