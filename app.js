const express = require("express");
const routes = require("./routes");

const app = express();
app.use("/api/v1/questions", routes.question);
// app.use('/api/v1/user', routes.user);
module.exports = app;
