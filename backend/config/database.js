import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'freedb_myOctalogic', // Default database name if not provided
  process.env.DB_USER || 'freedb_octalogic-user', // Default username if not provided
  process.env.DB_PASSWORD || '5z5mRyU2&%A%ZdF', // Default password if not provided
  {
    host: process.env.DB_HOST || 'sql.freedb.tech', // Default host if not provided
    dialect: 'mysql', 
    port: process.env.DB_PORT || 3306, // Default MySQL port if not provided
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

export { sequelize, connectDB };
