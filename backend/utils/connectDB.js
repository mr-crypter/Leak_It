const mongoose = require("mongoose");
const config = require("config");

// mongodb+srv://<username>:<password>@cluster0.ssslp.mongodb.net/?retryWrites=true&w=majority

// //const dbUrl = `")}:${config.get(
//   "dbPass"
// )}@anonymousforum.komolbr.mongodb.net/${config.get(
//   "databaseName"
// )}?retryWrites=true&w=majority`;

const dbUrl = config.get('dbURI')
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database connected...");
  } catch (error) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
