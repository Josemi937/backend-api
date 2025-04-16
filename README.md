#  Backend API

This project is a backend API designed to handle CRUD operations for managing learning programs in a fictional system for Hult Ashridge Executive Education. The API allows the marketing team to manage programs by adding, querying, deleting, and updating them. The solution is built using **TypeScript** and **Express.js**.

## Features

- **GET /api/programs**: A list of all available programs.
- **POST /api/programs**: Adds a new program to the list.
- **DELETE /api/programs/:id**: Deletes a specific program by ID.
- **PUT /api/programs/:id**: Updates an existing program by ID.

## Technologies Used

- **Express.js**: A web framework for Node.js to build the API.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Jest**: A testing framework used to write unit tests for the API.
- **Supertest**: A tool to test HTTP assertions for the Express API.

## Project Setup

Follow these steps to set up and run the project locally.

### Step 1: Clone the Repository

git clone https://github.com/your-repo/your-project.git
cd your-project

### Step 2: Install dependencies and Run the APP.

npm install
npm start

This will start the application on http://localhost:4000.

### Step 3: Test the Endpoints.

Avalaible Endpoints: 

- GET /api/programs
- POST /api/programs
- DELETE /api/programs/:id
- PUT /api/programs/:id

### Step 4: Test the APP.

The application comes with unit tests for the created API routes. To run the tests:

- Make sure the application is stopped (if it's running).
- Run the following command to execute the tests:

npm test

The tests use Jest and Supertest for testing the API endpoints.

### Deployment Instructions:

You can deploy this API locally by following these steps:

- Ensure Node.js and npm are installed.

- Clone the repository and install dependencies as described above.

- Run the server using npm start.

- The API will be available at http://localhost:4000.

