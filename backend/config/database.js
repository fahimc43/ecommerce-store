const mongoose = require("mongoose");

// const dotenv = require("dotenv");

// // Setting up config file
// dotenv.config({ path: "/config.env" });

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB database connected with HOST: ${con.connection.host}`
      );
    });
};

module.exports = connectDatabase;
