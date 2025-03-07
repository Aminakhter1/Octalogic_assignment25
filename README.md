# Octalogic_assignment25

A full-stack vehicle rental booking system built with Node.js (Express) for the backend, React for the frontend, and MySQL as the database.

Features
Backend:

RESTful APIs for managing vehicles and bookings.

Database seeding with initial vehicle data.

Prevents overlapping bookings for the same vehicle.

Frontend:

Step-by-step booking form.

Dynamic dropdowns for vehicle types and models.

Date range picker for booking dates.

Tech Stack
Backend: Node.js, Express, MySQL, Sequelize ORM.

Frontend: React, Material UI, Tailwind CSS, Axios.

Setup
Clone the Repository:

bash
Copy
git clone https://github.com/Aminakhter1/Octalogic_assignment25
cd vehicle-rental-booking
Backend:

Navigate to backend, install dependencies, and set up .env:

bash
Copy
cd backend
npm install
echo "DB_HOST=localhost\nDB_USER=root\nDB_PASSWORD=yourpassword\nDB_NAME=vehicle_rental" > .env
Run migrations and seed data:

bash
Copy
node migrations/migration-setup.js
node migrations/seed-data.js
Start the server:

bash
Copy
npm start
Frontend:

Navigate to frontend, install dependencies, and start the app:

bash
Copy
cd ../frontend
npm install
npm start
API Endpoints
GET /api/vehicles/types - Fetch vehicle types.

GET /api/vehicles/:type - Fetch vehicles by type.

POST /api/bookings - Submit a booking.

Folder Structure
Copy
vehicle-rental-booking/
│── backend/               # Backend code (Express, Sequelize)
│── frontend/              # Frontend code (React, Material UI)
