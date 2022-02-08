const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("shutting down due to uncaught exception");
  process.exit(1);
});

// Setting up config file
dotenv.config({ path: "./config/config.env" });

// Connecting to database
connectDatabase();

const Server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} node`
  );
});

// Handle unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  Server.close(() => {
    process.exit(1);
  });
});
