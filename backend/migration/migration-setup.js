
import { sequelize } from "../config/database.js";
import "../models/Vehicle.js";  // Ensure models are imported
import "../models/Booking.js";  // Ensure models are imported

const setupDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Updates schema without deleting data
    console.log("Database & tables are set up successfully!");
    process.exit();
  } catch (error) {
    console.error("Error setting up the database:", error);
    process.exit(1);
  }
};

setupDatabase();
