const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const PORT = 5000;
app.use(express.json());
require("./models/user");
app.use(require("./routs/auth"));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connected mongo db database successfully....");
});
mongoose.connection.on("error", (err) => {
  console.log("An error occoured!!", err);
});
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
