const session = require("express-session");
const MongoStore = require("connect-mongo");
const config = require("config");

// const dbUrl = `mongodb+srv://${config.get("dbName")}:${config.get(
//   "dbPass"
// )}@anonymousforum.komolbr.mongodb.net/${config.get(
//   "sessionDatabaseName"
// )}?retryWrites=true&w=majority`;
const dbUrl = config.get('dbURI')

// Create a new MongoDB session store
const store = MongoStore.create({
  mongoUrl: dbUrl, // Use existing Mongoose connection
  collection: "sessions", // Collection name for storing sessions
  stringify: true,
});

module.exports = store;
