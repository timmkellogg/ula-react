# React + JWT Authentication (with React Router and React Bootstrap)

This project consists of a **Vite React client** and an **Express server**. Follow the instructions below to get both running.

## Note on Proxy Setup

To simplify communication between the Vite client and the Express server during development, a proxy has already been configured in the client. This allows API requests (e.g., `/api/*`) from the client to be forwarded to the backend server running on `http://localhost:5000`, avoiding any CORS issues.

## Prerequisites

- Ensure **Node.js** and **npm** are installed globally.


## Running the Client (React + Vite)

1. Navigate to the `client/` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

   The app will be available at:

   ```
   http://localhost:5173
   ```

---

## Running the Server (Express)

1. Navigate to the `server/` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

   The Express server will run at:

   ```
   http://localhost:3000
   ```


You should now have both the client and server running locally!